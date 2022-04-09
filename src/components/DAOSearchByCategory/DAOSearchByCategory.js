import React, { useState } from 'react';
import './DAOSearchByCategory.css'

const DAOSearchByCategory = () => {
  const [query, setQuery] = useState('')

  return (
    <div className='container'>
      <h2 className='title text-center mt-5'>DAO search by category</h2>
      <div className='search-category-container'>
        <div>
          <h6>Search <span>DAO</span></h6>
          <p>Set your <span>DAO type</span> choose <span>category</span> to start your search. <a href=''>View search tips</a></p>
        </div>
        <div className='d-flex'>
          <select name="category" id="category">
            <optgroup label="Select category">
              <option value="De-Fi Protocol DAO">De-Fi Protocol DAO</option>
              <option value="NFT/Entertainment">NFT/Entertainment</option>
              <option value="Game/Sport">Game/Sport</option>
              <option value="Social">Social</option>
            </optgroup>
            
          </select>

          <div className='category-searchInput-container d-flex'>
            <input type="text" onChange={e => setQuery(e.target.value)} placeholder="Search by keyword or advertiser" className="form-control shadow-none category-searchInput"  />
            <button type="submit">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAOSearchByCategory;