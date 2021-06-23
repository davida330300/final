import './App.css';
import Todos from "./container/Todos";
import Clock from "./container/Clock";
import Tree from "./container/Tree";
import NavBar from "./component/NavBar";
import {Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Focus.io</h1>
      <NavBar></NavBar>
      <Route exact path="./container/Todos.js" component={Todos}/>
      <Route exact path="./container/Clock.js" component={Clock}/>
      <Route exact path="./container/Tree.js" component={Tree}/>
      {/* <Todos></Todos> */}
    </div>
  );
}

export default App;
