import React from 'react';
import './DAOCategoryFilterItem.css'

const DAOCategoryFilterItem = (props) => {
  const {Name, Description, Website, Twitter } = props.filterItem;

  return (
    <div className='filterItem-container'>
      <h6><span>Name:</span> {Name}</h6>
      <p><span>Description:</span> {Description}</p>
      {Website? <a href={Website}><p><span>Website:</span> {Website}</p></a> : ''}
      {Twitter? <a href={Twitter}><p><span>Twitter:</span> {Twitter}</p></a> : ''}
    </div>
  );
};

export default DAOCategoryFilterItem;