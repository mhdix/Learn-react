import React from 'react'
import CourseCard from './CourseCard';


const courses = [
  {
    id: 1,
    title: "Design hard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, recusandae assumenda esse",
    imageUrl: "/img2.jpg",
    rate: "4",
    tag: ["UI/UX design"],
    start: new Date().toLocaleDateString("fa-IR"),
    status: "Upcoming",
  },
  {
    id: 2,
    title: "2Design hard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, recusandae assumenda esse",
    imageUrl: "/img2.jpg",
    rate: "4",
    tag: ["UI/UX design", "web design"],
    start: new Date().toLocaleDateString("fa-IR"),
    status: "Upcoming",
  },
  {
    id: 3,
    title: "3Design hard",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, recusandae assumenda esse",
    imageUrl: "/img2.jpg",
    rate: "4",
    tag: ["UI/UX design", "web design"],
    start: new Date().toLocaleDateString("fa-IR"),
    status: "Upcoming",
  },
];
const CourseList = () => {
  return (
    <div>
        {courses.map((course) => {
            return (
                <CourseCard course={course} key={course.id}/>
                );
                
            })
        }
    </div>
  );
}

export default CourseList