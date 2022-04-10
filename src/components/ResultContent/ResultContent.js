import React from 'react';
import './ResultContent.css'

const ResultContent = (props) => {

  return (
    <div className='container text-start'>
      <div className='result-content mt-4'>
        <a href={props.result.url}>{props.result.displayed_url}</a>
        <br/>
        <a href={props.result.url}><h5>{props.result.title}</h5></a>
        <p href=''>{props.result.snippet}</p>

        
      </div>
    </div>
  );
};

export default ResultContent;