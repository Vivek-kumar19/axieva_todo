import React from 'react';
import { Link } from 'react-router-dom';

const GetStart = () => {
  return (
    <div className="get-started">
      <h1> To-Do List</h1>
      <div className='center_img'>
        <img src={process.env.PUBLIC_URL + 'assets/landing-img.svg'} alt={'image of to-do list'} />
        
        <div className='text'>
        <h2>Welcome to To Do App</h2>
        <p>To Do will help you to stay organized and perform your task much faster</p>
        </div>

      </div>
      <div className='mx-15'>
      <Link to="todo" >
      <button className='getStartBtn'>
       Get Started 
      </button>
      </Link>
      </div>
    </div>
  );
};

export default GetStart;
