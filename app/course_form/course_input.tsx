import { ChangeEvent, useState } from "react";

export default function CourseInput ({ courses, setCourses }: any) {
  // const [state, setState] = useState({
  //   subject: '',
  //   course:''
  // });
  
  // const changeHandler = (e) => {
  //   setCourses({
  //     ...courses,
  //     { [e.target.name]: e.target.value }
  //   });
  //   console.log(courses);
  // }

  return (
    <div className="row">
      <div className="column">
        
      </div>
      <div className="column">
        <input name="course" type="text" placeholder="Course #" onChange={changeHandler}></input>
      </div>
    </div>
  );
}