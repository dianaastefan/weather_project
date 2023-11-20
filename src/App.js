import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Weather from "./components/Weather"


function App() {
  return (
    <div>
      
      <Routes>

        <Route path='/' element={<Weather />} />

      </Routes>
      
      
    </div>
  );
}

export default App;
