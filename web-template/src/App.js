import "./App.css";
import TopNav from "./components/navbar/TopNav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import NavBar from "./components/navbar/NavBar";
import NavBarMobile from "./components/navbar/NavBarMobile";
import SideBar from "./components/navbar/SideBar";
import SubMenu from "./components/SubMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <NavBar />
        <SubMenu />
        <NavBarMobile />
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
