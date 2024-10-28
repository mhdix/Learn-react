import React from 'react'

const NoteList = ({ note, setNote, onDelete }) => {
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
          />
        );
      })}
    </div>
  );
};

export default NoteList;

function NoteItem({ item, onDelete , onSubmit}) {
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
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <form action="#" onSubmit={onSubmit}>
          <input type="checkbox" />
          <button
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "transparent",
            }}
            onClick={() => onDelete(item.id   )}
            type="submit"
          >
            ❌
          </button>
        </form>
      </div>
    </div>
  );
}