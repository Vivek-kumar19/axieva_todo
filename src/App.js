import React from 'react';
import { BrowserRouter as Router,Routes,Route, } from "react-router-dom";
import GetStart from './pages/GetStart/GetStart';
import ToDoList from './pages/ToDoList/ToDoList';
import useDeviceDetect from './useDeviceDetect';
import './App.css';

function App() {
  useDeviceDetect();

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<GetStart/>} />
          <Route path="/todo" element={<ToDoList/>} />
        </Routes>
    </Router>
  );
}

export default App;
