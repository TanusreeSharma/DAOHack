import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import DAOSearchByCategory from './components/DAOSearchByCategory/DAOSearchByCategory';
import SeeLatestPostOfDAO from './components/SeeLatestPostOfDAO/SeeLatestPostOfDAO';
import DAOsocialGraphSearch from "./components/DAOsocialGraphSearch/DAOsocialGraphSearch";
import UserDetails from "./components/UserDetails/UserDetails";
import Game from "./components/Game/Game";
import StartGame from "./components/StartGame/StartGame";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/searchByCategory">
              <DAOSearchByCategory/>
            </Route>
            <Route path="/latestPostOfDAO">
              <SeeLatestPostOfDAO/>
            </Route>
            <Route path="/DAOsocialGraphSearch">
              <DAOsocialGraphSearch/>
            </Route>
            <Route path="/user/:id">
              <UserDetails />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/startGame">
              <StartGame />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
