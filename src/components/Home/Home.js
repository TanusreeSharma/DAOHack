import React, { useState } from 'react';
import logo from '../../img/flc_design2022040917829.png'
import gameIcon from '../../img/Google_Play_Games_icon.png'
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
        
        <div className='text-center mt-5 pt-5'>
          <img width={200} src={logo} alt=""/>

          <h2 className='title mt-5'>Discover DAO Community</h2>
          <div className=' mt-4'>
            <form  className='search-container' onSubmit={handleSubmit}>
              <input type="text" name='search' placeholder="Search....." className="form-control shadow-none searchInput"  />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className='another-search-link'>
            <a href="/searchByCategory">DAO Search by Category</a>
            <a href="/DAOsocialGraphSearch">DAO Community graph</a>
            <a href="/latestPostOfDAO">Latest Post of DAO</a>
            <a href="/game">
              <img width={30} src={gameIcon} alt=""/>
            </a>
          </div>
          <div className='mt-5 Dao-text'>
            <h5>DAO Search is an applicattion built on distributed file system and API. <br/>
              Explore and Learn about Different DAOs and Navigate the community Network.
            </h5>
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