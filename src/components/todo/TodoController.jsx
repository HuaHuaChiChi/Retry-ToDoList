import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import { useState } from "react"


function TodoController() {
  const [toDos, setToDos] = useState([])

  const onsubmitTodo = (todo) => {
    setToDos((prevToDos) => [todo, ...prevToDos]);
    console.log(toDos)
  };

  const onDeleteTodo = (id) => {
    setToDos((prevToDos) => prevToDos.filter((todo)=> todo.id !== id));
  }

  const onToggleTodo = (id) => {
    setToDos((prevToDos) => prevToDos.map((todo) => {
      if(todo.id === id) {
        return {...todo, isDone : !todo.isDone}
      }
      return todo
    }))
  }

  return (
    <main>
      <TodoForm onsubmitTodo = {onsubmitTodo} />
      <TodoList toDos={toDos} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>
    </main>
  )
}

export default TodoController