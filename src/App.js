import './App.css';
import Todos from "./container/Todos";
import Clock from "./container/Clock";
import Tree from "./container/Tree";
import NavBar from "./component/NavBar";
import {Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <h1>Focus.io</h1> */}
      
      <Route exact path="/Todos" component={Todos}/>
      <Route exact path="/Clock" component={Clock}/>
      <Route exact path="/Tree" component={Tree}/>
      <NavBar/>
      {/* <Todos></Todos> */}
    </div>
  );
}

export default App;
