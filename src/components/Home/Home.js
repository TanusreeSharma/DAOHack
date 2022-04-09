import React, { useState } from 'react';
import userProfileData from '../../fakeData';
import blockchainImg from '../../img/istock-680381152zapp2photo.jpg';

import './Home.css';
import ResultContent from './../ResultContent/ResultContent';



const Home = () => {
  const [results, setResults] = useState([]);
  console.log(results)

  const handleSubmit = (e) => {
    const qry = e.target.search.value;
    const url = `http://api.serpstack.com/search?access_key=ac9aa0cf83ebc78f4f6c821b76856f56&query=${qry}`

    fetch(url)
    .then(res => res.json())
    .then(data => setResults(data.organic_results))

    e.preventDefault()
  }



  return (
    <div>
      <div className='container'>
        <div className='text-center mt-5'>
          <h2 className='title'>Discover DAOs Network</h2>
          <div className=' mt-4'>
            <form  className='search-container' onSubmit={handleSubmit}>
              <input type="text" name='search' placeholder="Search....." className="form-control shadow-none searchInput"  />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className='another-search-link'>
            <a href="/searchByCategory">DAO search by category</a>
            <a href="/DAOsocialGraphSearch">DAO social graph search</a>
            <a href="/latestPostOfDAO">See latest post of DAO</a>
          </div>
          <div className='mt-5 Dao-text'>
            <h5>Dexpo is a social network/search engine for DAO built on the blockchain. <br/>
              Search and explore it's posts, people and connections.
            </h5>
          </div>
          <div className='mt-5 mb-5'>
            <img width='300px' src={blockchainImg} alt=""/>
          </div>
          <div id='results-content'>
            {
              results.map(result => <ResultContent key={result.id} result={result}></ResultContent>)
            }
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;