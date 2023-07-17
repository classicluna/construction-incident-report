import React from 'react';

function IncidentList({ incidents }) {
  return (
    <div>
      <h2>Incident List</h2>
      {incidents && incidents.length > 0 ? (
        incidents.map((incident, index) => (
          <div key={index}>
            <h3>{incident.title}</h3>
            <p>{incident.description}</p>
          </div>
        ))
      ) : (
        <p>No incidents reported.</p>
      )}
    </div>
  );
}

export default IncidentList;
