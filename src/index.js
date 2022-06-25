import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Timer from './components/neumorphic-timer.js';
import Progress from './components/progress.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timer />
    <Progress />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
