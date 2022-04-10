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
import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

function App() {
  const [file, setFile] = useState(null);
  const [urlArr, setUrlArr] = useState([]);

    const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);

    reader.onloadend = () => {
      setFile(Buffer(reader.result));
    };

    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const created = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${created.path}`;
      setUrlArr((prev) => [...prev, url]);
    } catch (error) {
      console.log(error.message);
    }
  };
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
