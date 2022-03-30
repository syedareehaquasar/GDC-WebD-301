import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import AppContainer from "./AppContainer";
import Header from "./Header";

function App() {

  const [state, setState] = useState("HOME");

  const closeForm = () => {
    setState("HOME")
  }

  const openForm = () => {
    setState("FORM")
  }

  return (
    <AppContainer>
      <div className="p-4 mx-auto bg-white shadow-lg rounded-xl m-4">
        <Header
          title={`Welcome to Lesson 5 of $react-typescript with #tailwindcss`}
        />
        {state === "HOME" ? (
          <Home openFormCB={openForm} />) : (
          <Form closeFormCB={closeForm}/>)
        }
      </div>
    </AppContainer>
  );
}

export default App;
