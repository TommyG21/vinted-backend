import "./App.css";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route>
          <Home />
          <Offer />
        </Route>
        <Route>
          <Home />
          <Link />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
