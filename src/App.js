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
// import DAOsocialGraphSearch from './components/DAOsocialGraphSearch/DAOsocialGraphSearch';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="searchByCategory" element={<DAOSearchByCategory />} />
        <Route path="latestPostOfDAO" element={<SeeLatestPostOfDAO />} />
        <Route path="DAOsocialGraphSearch/*" element={<DAOsocialGraphSearch />} >
          <Route path='users' element={<p>this is users</p>}></Route>
          <Route path='userDetails/:id' element={<p>this is user details</p>}></Route>
        </Route>
      </Routes> */}

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
          </Switch>
      </Router>
    </div>
  );
}

export default App;
