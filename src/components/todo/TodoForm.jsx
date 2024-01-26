function TodoForm({onsubmitTodo}) {

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;
    const date = e.target.date.value;

    onsubmitTodo({
      id: Date.now(),
      title,
      content,
      isDone: false,
      time: date
    })

//NOTE - 온 서브밋에 보내는 부분 이해가 필요할 듯 부모 컴포넌트 안에 있는 함수를 트리거 시켜서 매개변수를 자식에서 제공해주는 것이다.
// 매개변수를 자식에 담아서 트리거 시킨다.
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="제목" name="title"/>
      <input type="text" placeholder="내용"name="content"/>
      <input type="date" name="date"/>
      <button type="submit">제출</button>
    </form>
  )
}

export default TodoForm