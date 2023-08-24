import { useState } from "react";
import CourseInput from "./course_input";

export default function CourseForm () {
  // const [count, setCount] = useState(1);
  const [courses, setCourses] = useState([{
    subject: '',
    course: ''
}]);

  // const addCourse = () => {
  //   setCount(count + 1);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <input type="button" value="Add Course"></input>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <h2>Desired Courses</h2>
        </div>
        {courses.map((input, index) => {
          return(
            <div className="row">
              <div key={index}></div>
              <div className="column">
                <input name="subject" type="text" placeholder="Subject" ></input>
              </div>
              <div className="column">
                <input name="course" type="text" placeholder="Course#" ></input>
              </div>
            </div>
          )
        })}
        <div className="row">
          <input type="submit" onClick={handleSubmit}></input>
        </div>
    </form>
    </>
  );
}