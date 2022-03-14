import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="flex h-screen bg-gray-100 items-center">
      <div className="w-3/4 p-4 mx-auto bg-white shadow-lg rounded-xl">
        <img src={logo} alt="logo" />
        <h1 className="text-center text-xl">Welcome to <br /> #react-typescript with #tailwindcss </h1>
        <Form/>
      </div>
    </div>
  );
}

export default App;
