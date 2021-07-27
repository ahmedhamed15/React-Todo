import MainLogo from "./components/MainLogo";
import Qoute from "./components/Qoute";
import TodoList from "./components/Todos/TodoList";

function App() {
  return (
    <section className="App">
      <MainLogo />
      <Qoute />
      <TodoList />
    </section>
  );
}

export default App;