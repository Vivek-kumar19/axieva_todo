import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../../redux/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task-item">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => dispatch(toggleTask(task.id))} 
      />
      <span className={task.completed ? 'completed' : ''}>{task.name}</span>
      <img className='delete_ic' src={process.env.PUBLIC_URL + 'assets/delete_ic.svg'} onClick={() => dispatch(deleteTask(task.id))} alt={'delete icon'} />
    </div>
  );
};

export default TaskItem;
