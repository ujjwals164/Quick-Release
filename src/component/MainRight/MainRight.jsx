import React from 'react';

function MainRight({person}) {
  if (!person) {
    return (
      <div className="w-3/4 p-4">
        <p>Select a person to see their details.</p>
      </div>
    );
  }

  return (
    <div >
      <div >
        <h2 >{person.title}</h2>
        <p><strong>Age:</strong> {person.createdBy}</p>
        
        <p><strong>Description:</strong> {person.description}</p>
      </div>
    </div>
  );
}

export default MainRight;
