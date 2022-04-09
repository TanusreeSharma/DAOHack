import React, { useEffect, useState } from 'react';
import './SearchUsers.css'
// import userProfileData from '../../fakeData';
import User from './../user/User';
import axios from 'axios';

const SearchUsers = () => {

  // const handleAddProduct = () => {
  //   axios.post('http://localhost:5500/userProfileData', userProfileData)
  //   .then(res => {
  //     alert('Product added successfully.')
  //   })
  // }

  const [userProfileData, setUserProfileData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/userProfiles")
    .then((res) => res.json())
    .then((data) => setUserProfileData(data));
  }, []);

  return (
    <div>
      <menu>
        <ul>
          <li>Top</li>
          <li>Latest</li>
          <li>Profiles</li>
          <li>Links</li>
        </ul>
      </menu>
      <div className='userContent'>
        {
          userProfileData.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  );
};

export default SearchUsers;