import { Injectable } from '@angular/core';
import { SetupComponent } from '../setup/setup.component';
import { CourseInfo } from '../interfaces/course-info';
import { GameDataService } from './game-data.service';

@Injectable({
  providedIn: 'root'
})
export class CourseGetterService {

  constructor(private gameData: GameDataService) {
  }

  generalCourseData: any = {};

  httpRequestGeneral(){
    let xhttp = new XMLHttpRequest();
    let dataGeneral: any = {};
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let myCourses = JSON.parse(this.responseText);
        let dataGen = myCourses;
        console.log(myCourses);
        dataGeneral = myCourses;
      }
    };
    this.generalCourseData = dataGeneral;
    xhttp.open("GET", "https://uxcobra.com/golfapi/courses.txt", true);
    xhttp.send();
  }

  httpRequestDetailed(id){
    let dataDet: any = {};
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let courseDetails = JSON.parse(this.responseText);
        dataDet = courseDetails;
        console.log(courseDetails);
      }
    };
    xhttp.open("GET", `https://uxcobra.com/golfapi/course${id}.txt`, true);
    xhttp.send();
    this.gameData.thisCourse = {
      courseName: dataDet.data.name,


    }
  }
}

