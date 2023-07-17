import React from 'react';

function Home({ incidents }) {
  return (
    <div>
      <h1>Welcome to Incident Reporting Tool</h1>
      <h2>Incident List</h2>
      {incidents.length > 0 ? (
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

export default Home;
