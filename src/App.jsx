import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ReportForm from './components/ReportForm';
import './App.css';

function App() {
  const [incidents, setIncidents] = useState([]);

  const handleReport = (incident) => {
    setIncidents([...incidents, incident]);
  };

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/report'>Report an Incident</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home incidents={incidents} />} />
        <Route
          path='/report'
          element={<ReportForm onReport={handleReport} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
