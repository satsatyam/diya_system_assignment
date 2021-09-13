import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tutorials from "./components/pages/Tutorials";
import Documents from "./components/pages/Documents";
import Addons from "./components/pages/Addons";
import Releases from "./components/pages/Releases";
import SignUp from "./components/pages/SignUp";
import Getinvolved from "./components/pages/Getinvolved";
import Usecases from "./components/pages/Usecases";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Tutorials" component={Tutorials} />
        <Route path="/Documents" component={Documents} />
        <Route path="/Addons" component={Addons} />
        <Route path="/Releases" component={Releases} />
        <Route path="/Sign-up" component={SignUp} />
        <Route path="/Getinvolved" component={Getinvolved} />
        <Route path="/Usecases" component={Usecases} />
      </Switch>
    </Router>
  );
}
export default App;
