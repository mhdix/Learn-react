import React, { useState } from "react";

import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";
import NoteStatus from "./NoteStatus";
import NoteHeader from "./NoteHeader";

const AppNote = () => {
  const [note, setNote] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const onAddNote = (newNote) => {
    setNote((prevNote) => [...prevNote, newNote]);
  };
  const handleDeleteNote = (id) => {
    setNote((prevNote) => prevNote.filter((note) => note.id !== id));

    // console.log(id)
    // setNote(prevNote => prevNote.filter((note) => note.id !== id))
  };
  const handleCompleteNote = (e) => {
    const id = Number(e.target.value);
    const newNote = note.map((note) =>
      note.id === id ? { ...note, isCompleted: !note.isCompleted } : note
    );
    setNote(newNote);
    // console.log(newNote)
  };

  let sortedNotes = note;
  if (sortBy === "latest")
    sortedNotes = [...note].sort(
      (a, b) => new Date(a.createAt) - new Date(b.createAt)
    );
  if (sortBy === "earliest")
    sortedNotes = [...note].sort(
      (a, b) => new Date(b.createAt) - new Date(a.createAt)
    );
  if (sortBy === "completed")
    sortedNotes = [...note].sort(
      (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
    );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "space-around",
      }}
    >
      <NoteHeader
        note={note}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="add-note">
        <AddNewNote onAddNote={onAddNote} />
      </div>

      <br />

      <div
        className="note-list"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <NoteStatus note={note} />
        <NoteList
          note={sortedNotes}
          onDelete={handleDeleteNote}
          onComplete={handleCompleteNote}
        />
      </div>
    </div>
  );
};

export default AppNote;
