import TodoItem from "./TodoItem"

function TodoList({toDos, onDeleteTodo, onToggleTodo}) {
  return (
    <section>
      <div>
        <h2>하는중</h2>
        <ul>
        {
          toDos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>
          ))
        }
        </ul>
      </div>
      

    </section>
  )
}

export default TodoList