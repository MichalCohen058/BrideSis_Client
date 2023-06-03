import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Components/Register/Register';
import UserList from './Components/UserList/UserList';
import Login from './Components/Login/Login';
import FillQuestionnaire from './Components/FillQuestionnaire/FillQuestionnaire';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FillQuestionnaire" element={<FillQuestionnaire />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        {/* <Route path="/UserList" element={<UserList />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
