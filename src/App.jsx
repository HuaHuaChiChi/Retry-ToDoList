import "./App.css";
import Header from "./components/layout/Header";
import TodoController from "./components/todo/TodoController";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Header/>
      <TodoController/>
      <Footer></Footer>
    </div>
  );
}

export default App;
