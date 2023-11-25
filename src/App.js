import "./App.css";
import LoginForm from "./LoginForm/Login";
import FormFilder from "./FormFilder/FormFilder";
import { Context } from "./Context/Context";
import { useState } from "react";
import {BrowserRouter, Route, Routes, } from "react-router-dom";
function App() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMesssage] = useState("");
  return (
    <Context.Provider
      value={{
        userName,
        setUserName,
        userPassword,
        setUserPassword,
        errorMessage,
        setErrorMesssage,
      }}
    >
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginForm/>}/>
        <Route path="tableForm" element={<FormFilder/>}/> 
      </Routes>
      </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
