
function TodoItem({todo, onDeleteTodo, onToggleTodo}) {
  const {id, title, content, isDone, deadLine} = todo
  return (
    <li className="todo-card-item">
      <h3>{title}</h3>
      <p>{content}</p>
      <div>
        <button onClick={() => onDeleteTodo(id)}>삭제</button>
        <button onClick={() => onToggleTodo(id)}>
          {isDone ? "완료" : "취소"}
        </button>
        <p>{deadLine}</p>
      </div>
    </li>
  )
}

export default TodoItem