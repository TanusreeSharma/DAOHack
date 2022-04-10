import React from 'react';
import './StartGame.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const StartGame = () => {

  const gameHandler = () => {
    const GOptions = document.querySelector('.G-options')
    const gameTitle = document.querySelector('.gameTitle')
    const gameOptions = document.querySelector('.game-options')

    gameTitle.style.display = "none";
    GOptions.style.display = "none";
    gameOptions.innerHTML = "Game Over!<br/>Your earn point is 100 <br/> Amazing!"


  }

  return (
    <div className='playGame-container'>
      <p  className='backBtn pt-5 text-white'><a href="/"><FontAwesomeIcon icon={faArrowLeft} /> Back to Home</a></p>
      <h3 className='gameTitle'>When the announcement of DAO is made?</h3>
      <div className='mt-5'>
            <div className='d-flex justify-content-center game-options correctResult'>
              <div className='G-options'>
              <p>May, 2015</p>
              </div>
              <h6>OR</h6>
              <div onClick={gameHandler} className='G-options'>
              <p>May, 2016</p>
              </div>
            </div>
          </div>
    </div>
  );
};

export default StartGame;