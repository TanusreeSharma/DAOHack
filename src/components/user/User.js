import React from 'react';
import { useHistory } from 'react-router-dom';
import './User.css'

const User = (props) => {
  const {_id, name, address, org, Member_of_DAO, vote_given, twitter} = props.user;

  const history = useHistory()

  const handleUserProfileDetails = id => {
    console.log("clicked");
    history.push(`/user/${id}`)
  }


  return (
    <span onClick={() => handleUserProfileDetails(_id)}>
      <div className='user-div my-3'>
        <div className='d-flex'>
          <p><span>Name:</span> {name}</p> 
          <button className='socialGraph-btn'>DAO graph</button>
        </div>
        <p><span>Owned by:</span> {address}</p>
        <p><span>Vote:</span> {vote_given}</p>
        <p><span>WebSite Link:</span> {twitter.website_link}</p>
      </div>
    </span>
  );
};

export default User;