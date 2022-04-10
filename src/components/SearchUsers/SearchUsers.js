import React, { useEffect, useState } from 'react';
import './SearchUsers.css'
import User from './../user/User';

// import axios from 'axios';
// import { CultureCommunityDAO } from '../../FakeData1';
// import userProfileData from '../../fakeData';

const SearchUsers = () => {

  // const handleAddProduct = () => {
  //   axios.post('https://dry-cliffs-15181.herokuapp.com/cultureCommunityDAOdata', CultureCommunityDAO)
  //   .then(res => {
  //     alert('Product added successfully.')
  //   })
  // }

  const [userProfileData, setUserProfileData] = useState([]);

  useEffect(() => {
    fetch("https://dry-cliffs-15181.herokuapp.com/userProfiles")
    .then((res) => res.json())
    .then((data) => setUserProfileData(data));
  }, []);

  return (
    <div>
      <menu>
        <ul>
          <li>Profiles</li>
          <li>Top Community Discussion </li>
          <li>Active Proposal</li>
          <li>Top Viewed Discussion</li>
          
          
        </ul>
      </menu>
      {/* <button onClick={handleAddProduct} type=""></button> */}
      <div className='userContent'>
        {
          userProfileData.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  );
};

export default SearchUsers;