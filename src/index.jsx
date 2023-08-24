import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './page/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './page/Portfilio';
import Skills from './page/Skills';
import Contact from './page/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Portfolio/Home" element={<Home />}/>
        <Route path="/Portfolio/Portfolio" element={<Portfolio />}/>
        <Route path='/Portfolio/Compétences' element={<Skills />}></Route>
        <Route path='Portfolio/Contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
