import TodoItem from "./TodoItem"


//NOTE - toDos 안의 배열을 필터로 나눠서 가져온 것 이라서 걍 toDos로 props 해도 됨
function TodoList({toDos, onDeleteTodo, onToggleTodo, head}) {
  return (
    <section>
      <div>
        <h2>{head}</h2>
        <ul>
        {
          toDos.map((todo) => (
            <TodoItem 
            key={todo.id} 
            todo={todo} 
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}/>
          ))
        }
        </ul>
      </div>
      

    </section>
  )
}

export default TodoList