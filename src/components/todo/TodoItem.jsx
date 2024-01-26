
function TodoItem({todo, onDeleteTodo, onToggleTodo}) {
  const {id, title, content, isDone, time} = todo
  return (
    <li className="todo-card-item">
      <h3>{title}</h3>
      <p>{content}</p>
      <div>
        <button onClick={() => onDeleteTodo(id)}>삭제</button>
        <button onClick={() => onToggleTodo(id)}>
          {isDone ? "완료" : "취소"}
        </button>
        <p>{time}</p>
      </div>
    </li>
  )
}

export default TodoItem