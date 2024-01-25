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

  const workingToDos = toDos.filter((todo) => !todo.isDone);
  const doneToDos = toDos.filter((todo) => todo.isDone);

  return (
    <main>
      <TodoForm onsubmitTodo = {onsubmitTodo} />
      <TodoList 
      head={"Working"}
      toDos={workingToDos} 
      onDeleteTodo={onDeleteTodo} 
      onToggleTodo={onToggleTodo}
      />
      <TodoList 
      head={"Done"}
      toDos={doneToDos} 
      onDeleteTodo={onDeleteTodo} 
      onToggleTodo={onToggleTodo}
      />
      {/* 투두리스트를 재사용 함 */}
    </main>
  )
}

export default TodoController