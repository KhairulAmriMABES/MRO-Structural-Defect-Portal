import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NewWorkordersPage from './pages/NewWorkordersPage';
import InspectedWorkordersPage from './pages/InspectedWorkordersPage';
import AircraftDigitalTwinPage from './pages/AircraftDigitalTwinPage';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Workorder Portal</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/new">New Workorders</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/inspected">Inspected Workorders</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/digital-twin">Aircraft Digital Twin</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <Routes>
            <Route path="/new" element={<NewWorkordersPage />} />
            <Route path="/inspected" element={<InspectedWorkordersPage />} />
            <Route path="/digital-twin" element={<AircraftDigitalTwinPage />} />
            <Route path="/" element={<NewWorkordersPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
