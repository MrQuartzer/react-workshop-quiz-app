import {useState} from "react"
import Menu from "./components/Menu"
import Quiz from "./components/Quiz";
import Score from "./components/Score";

function App() {
  const [appState,setAppState] = useState("menu")
  return (
    <div className="App">
      <h1>Web Developer Quiz</h1>
      {appState === "menu" && <Menu/>}
      {appState === "quiz" && <Quiz/>}
      {appState === "score" && <Score/>}
    </div>
  );
}

export default App;
