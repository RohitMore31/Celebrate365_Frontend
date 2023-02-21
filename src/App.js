import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import App5 from './Component/App5';
import FirstPage from './Component/firstpage/FirstPage';


function App() {
  let signInStatus = useSelector((state)=>state.userInfo.activeStatus)
  return (
    <div className="App">
      {signInStatus ? <App5 /> : <FirstPage />}
    </div>
  );
}

export default App;
