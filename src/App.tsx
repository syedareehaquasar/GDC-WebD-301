import React from 'react';
import './App.css';
import Form from './components/Form';
import AppContainer from './AppContainer';
import Header from './Header';

function App() {
  return (
    <AppContainer>
      <div className="p-4 mx-auto bg-white shadow-lg rounded-xl m-4">
      <Header
        title={`Welcome to Lesson 5 of $react-typescript with #tailwindcss`}
      />
      <Form />
      </div>
    </AppContainer>
  );
}

export default App;
