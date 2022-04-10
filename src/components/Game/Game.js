import React from 'react';
import './Game.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Game = () => {
  return (
    <div className='container'>
      <p  className='backBtn mt-5'><a href="/"><FontAwesomeIcon icon={faArrowLeft} /> Back to Home</a></p>
      <div className='row game-container'>
        <div className='col-md-4'>
          <div className='game-content'>
            <h3>When the announcement of DAO is made?</h3>
            <a href="/startGame"><button type="">Play Game</button></a>
          </div>
        </div>
        <div className='col-md-8'>
          <div className='game-img'>
            <div className='d-flex justify-content-center game-options'>
              <div className='G-options'>
              <p>May, 2015</p>
              </div>
              <h6>OR</h6>
              <div className='G-options'>
              <p>May, 2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;