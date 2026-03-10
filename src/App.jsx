import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Order from "./components/OrderPage/Order";
import Success from "./components/SuccessPage/Success";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>
  );
}

export default App;