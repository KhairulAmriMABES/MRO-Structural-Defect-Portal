import React from 'react';
import AircraftModel from '../components/AircraftModel';

function AircraftDigitalTwinPage() {
  return (
    <div className="aircraft-digital-twin">
      <h2>Aircraft Digital Twin</h2>
      <div className="model-container">
        <AircraftModel />
      </div>
    </div>
  );
}

export default AircraftDigitalTwinPage; 