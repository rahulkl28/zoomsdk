import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Meeting from './meeting';

let payload = {
  meetingNumber: '89820572049',
  role: 0,
  sdkKey: 'z9jEGxEoQumvHXFd6BOOMw',
  sdkSecret: 'Gz3mDJzBh87k5YJyyF6S8I2dXpDrqmM0',
  passWord: 'd0de6n',  
  userName: 'navjot',
  userEmail: '',
  leaveUrl: 'https://localhost:3000',
};

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/meeting" element={<Meeting payload={payload} />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
