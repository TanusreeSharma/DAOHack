import React from 'react';

const UserDetailsContent = (props) => {
  const {_id, name, address, org, Member_of_DAO, vote_given, twitter} = props.userProfile;
  return (
    <div className='container'>
      <div className='user-div' >
        <p><span>Name:</span> {name}</p>
        <p><span>Owned by:</span> {address}</p>
        <p><span>Vote:</span> {vote_given}</p>
        <p><span>WebSite Link:</span> {twitter.website_link}</p>
        <p><span>ORG:</span> {org}</p>
        <p><span>Member of DAO:</span> {Member_of_DAO}</p>
      </div>
    </div>
  );
};

export default UserDetailsContent;