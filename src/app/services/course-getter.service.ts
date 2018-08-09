import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseGetterService {

  constructor() { }

  // courseGeneral: any = this.httpRequestGeneral();
  // selectedCourse: string;
  // selectedCourseId: number;
  // selectedCourseDetails: any;

  // httpRequestGeneral(){
  //   let xhttp = new XMLHttpRequest();
  //   let myCourses: any = {};
  //   xhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       myCourses = JSON;
  //       console.log(myCourses);
  //     }
  //   };
  //   xhttp.open("GET", "https://uxcobra.com/golfapi/courses.txt", true);
  //   xhttp.send();
  //
  //   return myCourses;
  // }
  //
  // httpRequestDetailed(id){
  //   let xhttp = new XMLHttpRequest();
  //   let myCourses: any = {};
  //   xhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       myCourses = JSON;
  //       console.log(myCourses);
  //     }
  //   };
  //   xhttp.open("GET", `https://uxcobra.com/golfapi/course${id}.txt`, true);
  //   xhttp.send();
  //
  //   return myCourses;
  // }
}

