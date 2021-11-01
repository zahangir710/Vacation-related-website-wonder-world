import Headers from "./pages/Headers/Headers";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Rides from "./pages/Rides/Rides";
import Visit from "./pages/PlanVisit/Visit";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import AddRides from "./pages/AddRides/AddRides";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import UpdateBooking from "./pages/UpdateBooking/UpdateBooking";
import ConfirmBooking from "./pages/ConfirmBooking/ConfirmBooking";
import MyRides from "./pages/MyRides/MyRides";

function App() {
  return (
    <AuthProvider>
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

          <Route path="/visit">
            <Visit></Visit>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <PrivateRoute path="/confirm_booking/:id">
            <ConfirmBooking></ConfirmBooking>
          </PrivateRoute>
          <PrivateRoute path="/myrides">
            <MyRides></MyRides>
          </PrivateRoute>
          <PrivateRoute path="/addrides">
            <AddRides></AddRides>
          </PrivateRoute>
          <PrivateRoute path="/update_booking">
            <UpdateBooking></UpdateBooking>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
