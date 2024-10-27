import React, { useState } from "react";

import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";

const AppNote = () => {
  const [note, setNote] = useState([]);
  const onAddNote = (newNote) => {
    setNote(prevNote => [...prevNote, newNote])
  }

  return (
    <>
      <div className="add-note">
        <AddNewNote onAddNote={onAddNote} />
      </div>

      <br />

      <div className="note-list">
        <NoteList note={note} />
      </div>
    </>
  );
};

export default AppNote;
