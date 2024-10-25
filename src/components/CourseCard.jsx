import React from 'react'

const CourseCard = ({course}) => {
  return (
    <div
      style={{ border: "1px solid red", padding: "20px", margin: "40px" }}
    >
      <img src="" alt="" />
      <p>{course.title}</p>
      <div>{course.desc}</div>
      <p>tag 1</p>
      <p>
        {course.tag.map ((i) => {
            return (
              <div key={i}>
                <span>{i}</span>
                <br />
              </div>
            );
        })}
      </p>
      <p>{course.start }</p>
      <button>BUY</button>
    </div>
  );
}

export default CourseCard