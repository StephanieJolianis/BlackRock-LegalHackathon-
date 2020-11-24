import './App.css';
import Login from "./Components/Login";
import Main from "./Components/Main";
import DetalleAlerta from "./Components/DetalleAlerta";
import DetalleMes from "./Components/DetalleMes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 

function App() {
  return (
    <Router>
      <Switch> 
      <Route path="/" exact component={Login} /> 
      <Route path="/main" exact component={Main} /> 
      <Route path="/detallealerta" exact component={DetalleAlerta} /> 
      <Route path="/detallemes" exact component={DetalleMes} /> 
      </Switch>
    </Router>
  );
}

export default App;
 