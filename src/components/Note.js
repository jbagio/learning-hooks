import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ note, onRemoveNote }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => onRemoveNote(note.id)}>x</button>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object,
  onRemoveNote: PropTypes.func,
};

export default Note;
