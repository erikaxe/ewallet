import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddCard from "./components/AddCard";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addcard" component={AddCard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
