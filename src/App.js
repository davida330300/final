import './App.css';
import Todos from "./container/Todos"
import Clock from "./container/Clock"
import Head from "./container/Head"
import NavBar from "./component/NavBar"


export default function App() {

  return (

    <div className="App">
      <h1>Focus.io</h1>
      <Head></Head>
      <Todos></Todos>
      <Clock></Clock>
      <NavBar></NavBar>

    </div>
  );
}

