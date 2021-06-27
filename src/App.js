import './App.css';
import Todos from "./container/Todos"
import Clock from "./container/Clock"
import Tree from "./container/Tree"
import NavBar from "./component/NavBar"


function App() {



  return (

    <div className="App">
      <h1>Focus.io</h1>
      <Todos></Todos>
      <Clock></Clock>
      {/* <Tree></Tree> */}
      <NavBar></NavBar>

    </div>
  );
}

export default App;
