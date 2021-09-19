import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./components/home.js"

function App() {
  return (
  <BrowserRouter>
  <div>
    <Route component={Home} path="/" exact/>
  </div>
  </BrowserRouter>
  );
}

export default App;
