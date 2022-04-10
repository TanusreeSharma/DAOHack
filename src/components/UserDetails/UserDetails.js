import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserDetailsContent from '../UserDetailsContent/UserDetailsContent';

const UserDetails = () => {
  const {id} = useParams();
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    fetch(`https://dry-cliffs-15181.herokuapp.com/userProfiles/${id}`)
      .then((res) => res.json())
      .then((data) => setUserProfiles(data));
  }, []);

  return (
    <div className='container'>
      {
        userProfiles.map(userProfile => <UserDetailsContent key={userProfile.id} userProfile={userProfile}></UserDetailsContent>)
      }
    </div>
  );
};

export default UserDetails;