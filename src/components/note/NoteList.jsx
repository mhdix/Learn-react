import React from 'react'

const NoteList = ({ note, sortBy, onDelete, onComplete }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {note.map((item) => {
        return (
          <NoteItem
            key={item.id}
            item={item}
            onSubmit={handleSubmit}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        );
      })}
    </div>
  );
};

export default NoteList;

function NoteItem({ item, onDelete, onSubmit, onComplete }) {
  return (
    <div
      key={item.id}
      style={{
        border: "1px solid gray",
        padding: "10px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <p>{item.title}</p>
        <p>{item.desc}</p>
        <p>{item.id}</p>
        <p>{item.isCompleted ? 'true' : 'false'}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <form action="#" onSubmit={onSubmit}>
          <input
            type="checkbox"
            name={item.id}
            id={item.id}
            value={item.id}
            onChange={onComplete}
          />
          <button
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "transparent",
            }}
            onClick={() => onDelete(item.id)}
            type="submit"
          >
            ❌
          </button>
        </form>
      </div>
    </div>
  );
}