import React, { useState } from "react";

import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";

const AppNote = () => {
  const [note, setNote] = useState([]);

  const onAddNote = (newNote) => {
    setNote(prevNote => [...prevNote, newNote])
  }
  const handleDeleteNote = (id) => {
    const filteredNote = note.filter((n) => n.id !== id)
    setNote(filteredNote)
    setNote(prevNote => [...prevNote, filteredNote])
  }

  return (
    <>
      <div className="add-note">
        <AddNewNote onAddNote={onAddNote} />
      </div>

      <br />

      <div className="note-list">
        <NoteList note={note} onDelete={handleDeleteNote} />
      </div>  
    </>
  );
};

export default AppNote;
