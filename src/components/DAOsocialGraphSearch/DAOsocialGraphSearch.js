import React from 'react';
import './DAOsocialGraphSearch.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar,faUser, faFolder, faUsers, faLaptop, faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchUsers from '../SearchUsers/SearchUsers';
import UserDetails from '../UserDetails/UserDetails';


const drawerWidth = 350;

const DAOsocialGraphSearch = (props) => {
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='nastedRoute-container'>
      <h2 className='mt-3 mb-3'>DAO Expo</h2>

      <div className='ml-5 mt-4'>
        <div className='mb-4'>
          <h5 className='filterTitle'>Filter results by</h5>
          <p className='Expand'>Expand all</p>
        </div>
        <Divider />
        <div className='filter-option d-flex'>
          <span><FontAwesomeIcon icon={faFolder} /></span> 
          <p>Content</p>
          <small>+</small>
        </div>
        <div className='filter-option d-flex'>
          <span><FontAwesomeIcon icon={faUser} /></span> 
          <p>Profiles</p>
          <small>+</small>
        </div>
        <div className='filter-option d-flex'>
          <span><FontAwesomeIcon icon={faUsers} /></span> 
          <p>Voting</p>
          <small>+</small>
        </div>
        <div className='filter-option d-flex'>
          <span><FontAwesomeIcon icon={faLaptop} /></span> 
          <p>DAO Proposal</p>
          <small>+</small>
        </div>
        {/* <div className='filter-option d-flex'>
          <span><FontAwesomeIcon icon={faCalendar} /></span> 
          <p>Date</p>
          <small>+</small>
        </div> */}
      </div>
      <div className='applyFilter'>
        <button type="">Apply Filters</button>
        <span>Reset</span>
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    return (
    <section className="DAOsocialGraphSearch-container container-fluid">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
          <AppBar
            className='DAOsocialGraphSearchHeader'
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar className='heading'>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, color: "#1976d2",  display: { sm: 'none' } }}
              >
              <MenuIcon />
              </IconButton>
              <Typography  variant="h6" noWrap component="div">
                <div className=''>
                  <form  className='DAOsocialGraphSearch-InputContainer' >
                    <input type="text" name='search' placeholder="Search....." className="form-control shadow-none DAOsocialGraphSearchInput"  />
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                  </form>
                </div>
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>

            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            <Switch>
              <Route exact path={path}>
                <SearchUsers/>
              </Route>
              {/* <Route path={`${path}/user/:id`}>
                <UserDetails />
              </Route> */}
            </Switch>
          </Box>
      </Box>
    </section>
  );
};
DAOsocialGraphSearch.propTypes = {
    window: PropTypes.func,
  };

export default DAOsocialGraphSearch;
