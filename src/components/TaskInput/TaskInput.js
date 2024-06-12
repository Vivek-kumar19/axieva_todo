import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="task-input">
      <div className='input-container'>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Write down your task"
      />
      </div>
      
      <div className='mx-15'>
      <button className='getStartBtn my-15' onClick={handleAddTask} style={{padding:'14px'}}>Add Task</button>
      </div>

    </div>
  );
};

export default TaskInput;
