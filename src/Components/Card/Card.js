import React from 'react';
import './Card.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const Card = (props) => {
  return (
    <div className='card_main'>
        <div className='image_Title'>
           <img src={props.image} alt="dress_code" width={60} height={60}/>
           <h2 className='Title'>{props.Title} DRESS</h2>
        </div>
        <div>
           <ProgressBar bgcolor={props.color} progress={props.ColorPer}/>
        </div>
    </div>
  )
}

export default Card;