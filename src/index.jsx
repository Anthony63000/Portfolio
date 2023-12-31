import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './page/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './page/Portfilio';
import Skills from './page/Skills';
import Contact from './page/Contact';

import LanguageContextProvider from './components/Context/ContextLang';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import FocusWorks from './page/FocusWorks';
import { ThemeProvider } from './components/Context/ContextTheme';
import DarkLightModeButton from './components/DarkLightModeButton/DarkLightModeButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageContextProvider>
    <ThemeProvider>
      <React.StrictMode>
        <Router>
          <ScrollToTop />
          <DarkLightModeButton />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Works" element={<Portfolio key="portfolio"/>}/>
            <Route path='/Works/:id' element={<FocusWorks />}/>
            <Route path='/Competences' element={<Skills key="skills"/>}/>
            <Route path='/Contact' element={<Contact key="contact"/>}/>
          </Routes>
        </Router>
      </React.StrictMode>
    </ThemeProvider>
  </LanguageContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
