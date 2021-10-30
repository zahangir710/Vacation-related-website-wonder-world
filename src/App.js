import Headers from "./pages/Headers/Headers";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Rides from "./pages/Rides/Rides";
import Visit from "./pages/PlanVisit/Visit";
import YourRides from "./pages/YourRides/YourRides";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import AddRides from "./pages/AddRides/AddRides";

function App() {
  return (
    <Router>
      <Headers></Headers>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/rides">
          <Rides></Rides>
        </Route>
        <Route path="/rides/:id">
          <YourRides></YourRides>
        </Route>
        <Route path="/visit">
          <Visit></Visit>
        </Route>
        <Route path="/your_rides">
          <YourRides></YourRides>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/addrides">
          <AddRides></AddRides>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
