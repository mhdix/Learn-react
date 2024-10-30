import React from 'react'

const NoteStatus = ({note}) => {
    const allNotes = note.length
    const completedNote = note.filter((note) => note.isCompleted).length
    if(!allNotes) return <h2>no notes already exist</h2>
  return (
    <div>
      <ul style={{ display: "flex", gap: "30px", listStyleType: "none" }}>
        <li>All ({allNotes})</li>
        <li>Completed ({completedNote})</li>
        <li>notCompleted ({allNotes - completedNote})</li>
        <li></li>
      </ul>
    </div>
  );
}

export default NoteStatus