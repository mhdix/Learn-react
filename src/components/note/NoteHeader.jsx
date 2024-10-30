const NoteHeader = ({ note, sortBy, onSort }) => {
  return (
    <div className="note-header">
      <h1>My Note ({note.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">sort on latest notes</option>
        <option value="earliest">sort on earliest notes</option>
        <option value="completed">sort on completed notes</option>
      </select>
    </div>
  );
};

export default NoteHeader