import React from 'react'

const NoteList = ({note}) => {
  return (
    <div>
      {
        note.map((item, index) => {
          return (
            <div key={item.id}>
              <h1>{index + 1}</h1>
              <p>{item.title}</p>
              <p>{item.desc}</p>
              <hr />
            </div>
          );
        })
      }
    </div>
  )
}

export default NoteList