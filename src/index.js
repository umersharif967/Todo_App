import React from 'react';
import ReactDOM from 'react-dom/client';
// import  MainPage  from './pages/MainPage';
import MyData from './context/MyData'
import GetApiData from './components/GetApiData'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyData>
    <GetApiData />
  </MyData>
);
