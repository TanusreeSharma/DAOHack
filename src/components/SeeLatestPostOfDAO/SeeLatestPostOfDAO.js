import React, { useState } from 'react';
import './SeeLatestPostOfDAO.css'
import ResultContent from './../ResultContent/ResultContent';

const SeeLatestPostOfDAO = () => {
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
    <div className='container'>
      <h2 className='title text-center mt-5'>See latest post of DAO</h2>
          <div className=' mt-4 mb-5'>
          {/* <div className="gcse-search"></div> */}
          <form  className='search-container' onSubmit={handleSubmit}>
              <input type="text" name='search' placeholder="Search....." className="form-control shadow-none searchInput"  />
              <button type="submit">Search</button>
            </form>
          </div>

          <div id='results-content'>
            {
              results.map(result => <ResultContent key={result.id} result={result}></ResultContent>)
            }
          </div>
          
    </div>
  );
};

export default SeeLatestPostOfDAO;