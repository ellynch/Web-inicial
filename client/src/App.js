import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import miroutes from './config/routes';

import './App.scss';

//console.log(miroutes);

function App() {
  return (
    <Router>
      <Routes>
        {miroutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>

            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;

