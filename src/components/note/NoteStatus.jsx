import React from 'react'
import Message from './Message'
const NoteStatus = ({note}) => {
    const allNotes = note.length
    const completedNote = note.filter((note) => note.isCompleted).length
    if(!allNotes) return <Message text="no notes already exist">&times;</Message>
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