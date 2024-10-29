import React, { useState } from "react";

import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";
import NoteStatus from "./NoteStatus";

const AppNote = () => {
  const [note, setNote] = useState([]);

  const onAddNote = (newNote) => {
    setNote(prevNote => [...prevNote, newNote])
  }
  const handleDeleteNote = (id) => {
    setNote((prevNote) => prevNote.filter((note) => note.id !== id));
    
    // console.log(id)
    // setNote(prevNote => prevNote.filter((note) => note.id !== id))
  }  
  const handleCompleteNote = (e) => {
    const id = Number(e.target.value);
    const newNote = note.map((note) =>
      note.id === id ? { ...note, isCompleted: !note.isCompleted } : note
    );
    setNote(newNote)
    // console.log(newNote)
  } 
  return (
    <div style={{display: 'flex', alignItems: 'start', justifyContent: "space-around"}}>
      <div className="add-note">
        <AddNewNote onAddNote={onAddNote} />
      </div>

      <br />

      <div className="note-list" style={{display:"flex" ,justifyContent:'center', alignItems: 'center', flexDirection:'column'}} >
        <NoteStatus note={note}/>
        <NoteList note={note} onDelete={handleDeleteNote} onComplete={handleCompleteNote} />
      </div>  
    </div>
  );
};

export default AppNote;
