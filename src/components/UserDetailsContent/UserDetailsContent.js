import React from 'react';
import graphImg from '../../img/social-graph.png'
import './UserDetailsContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const UserDetailsContent = (props) => {
  const {_id, name, address, org, Member_of_DAO, vote_given, twitter} = props.userProfile;

  const ShowGraph =() => {
    const socialGraph = document.querySelector('.socialGraph');
    socialGraph.style.display = "block"
  }
  return (
    <div className='container'>
      <p  className='backBtn mt-5'><a href="/DAOsocialGraphSearch"><FontAwesomeIcon icon={faArrowLeft} /> Back to Home</a></p>
      <div className='user-div mt-5' >
        <div className='d-flex'>
          <p><span>Name:</span> {name}</p> 
          <button onClick={ShowGraph} className='socialGraph-btn'>DAO graph</button>
        </div>
        <p><span>Owned by:</span> {address}</p>
        <p><span>Vote:</span> {vote_given}</p>
        <p><span>WebSite Link:</span> {twitter.website_link}</p>
        <p><span>ORG:</span> {org}</p>
        <p><span>Member of DAO:</span> {Member_of_DAO}</p>
      </div>

      <div className='socialGraph mt-5'>
        <img width={600} src={graphImg} alt=""/>
      </div>
    </div>
  );
};

export default UserDetailsContent;