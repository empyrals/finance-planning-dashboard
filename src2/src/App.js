import "./App.css";
import Navbar from "./Navbar";
import Personal from "./Personal";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewPerson from "./ViewPerson";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route component={Home} exact path="/" />
          <Route component={Personal} path="/personal" />
          <Route component={ViewPerson} path="/view" />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
