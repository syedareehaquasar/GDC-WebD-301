import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="flex h-screen bg-blue-100 items-center">
      <div className="w-3/4 p-4 mx-auto bg-white shadow-lg rounded-xl">
        <div className='flex flex-row items-center justify-center'>
          <img src={logo} alt="logo" className="w-20 h-20 animate-spin" />
          <h1 className="text-center text-xl pt-4">Welcome to <br /> #react-typescript with #tailwindcss </h1>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
