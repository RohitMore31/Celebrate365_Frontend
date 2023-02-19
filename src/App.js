import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import App5 from './Component/App5';
import FirstPage from './Component/firstpage/FirstPage';
import SignupForm from './form/signup';
import HomePage from './home_Pages/homep';


function App() {
  let signInStatus = useSelector((state)=>state.userInfo.activeStatus)
  console.log("inside a App.js" ,signInStatus);
  return (
    <div className="App">
      {signInStatus ? <App5 /> : <FirstPage />}
    </div>
  );
}

export default App;
