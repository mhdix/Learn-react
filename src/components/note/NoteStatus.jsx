import React from 'react'

const NoteStatus = ({note}) => {
    const allNotes = note.length
    const completedNote = note.filter((note) => note.isCompleted).length
    console.log()
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