//vamos começar com o cabeçalho
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Corpo from "./components/Corpo";
import Rodape from "./components/Rodape";

function App() {
  return (
    <div>
      <Navbar />
      <Corpo />
      <Rodape />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));