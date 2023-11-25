
import './App.css';
import LoginForm from './LoginForm/Login';
import { Context } from "./Context/Context";
import { useState } from 'react';
function App() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMesssage] = useState("");
  return (
 <Context.Provider value={{userName, setUserName,userPassword, setUserPassword,errorMessage, setErrorMesssage}}>
 <div className="App">  
  <LoginForm/>
  </div>
 </Context.Provider>
   
      
  );
}

export default App;
