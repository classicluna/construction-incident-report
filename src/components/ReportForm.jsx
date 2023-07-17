import React, { useState } from 'react';

function ReportForm({ onReport }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const incident = {
      title,
      description,
    };

    onReport(incident);

    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Report an Incident, then go to homepage to view prior incidents</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ReportForm;
