import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import TaskInput from '../../components/TaskInput/TaskInput';
import TaskList from '../../components/TaskList/TaskList';

const ToDoList = () => {
  return (
      <Fragment>
        <Header />
    <div className="to-do-list">
      
      <div className='container'>
      <Hero />
      <TaskInput />
      <TaskList />
      </div>

      <img className='wave' src={process.env.PUBLIC_URL + 'assets/vector.svg'} alt='wave' />
    </div>
      </Fragment>
  );
};

export default ToDoList;
