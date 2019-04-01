import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import Note from './Note';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // componentDidMount
  useEffect(() => {
    const notesStorage = JSON.parse(localStorage.getItem('notes'));

    if (notesStorage) {
      setNotes(notesStorage);
    }
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = e => {
    e.preventDefault();

    setNotes([...notes, { id: uuid(), title, body }]);
    setTitle('');
    setBody('');
  };

  const handleRemoveNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <Note key={note.id} note={note} onRemoveNote={handleRemoveNote} />
      ))}
      <p>Add note</p>
      <form onSubmit={handleAddNote}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button>Add note</button>
      </form>
    </div>
  );
};

export default NoteApp;
