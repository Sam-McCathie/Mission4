import "./App.css";
import {Route} from "react-router-dom";

//Pages
import Home from "./Components/Pages/Home/Home";
import Testing from "./Components/Pages/Testing/Testing";
import Login from "./Components/Pages/Login/LoginPage";

//add exact before path
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/testing" component={Testing} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
