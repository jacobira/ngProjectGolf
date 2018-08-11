import { Injectable } from '@angular/core';
import { SetupComponent } from '../setup/setup.component';
import { CourseInfo } from '../interfaces/course-info';
import { GameDataService } from './game-data.service';
import { HttpClient } from '@angular/common/http';
import { HttpGenResponse } from '../interfaces/http-gen-response';
import {HttpDetResponse} from '../interfaces/http-det-response';

@Injectable({
  providedIn: 'root'
})
export class CourseGetterService {

  constructor(private gameData: GameDataService, private http: HttpClient) {
  }

  generalCourseData: HttpGenResponse;
  detailedCourseData: HttpDetResponse;
  courseNames: any[] = [];

  httpRequestGeneral(){
    this.http.get<HttpGenResponse>('https://uxcobra.com/golfapi/courses.txt').subscribe(data => {
      this.generalCourseData = data;
      for (let i = 0; i < data.courses.length; i++){
        this.courseNames.push({"name": data.courses[i].name, "id": data.courses[i].id});
      }
    });

  }

  httpRequestDetailed(id){
    let dataDet = this.detailedCourseData;
    this.http.get<HttpDetResponse>(`https://uxcobra.com/golfapi/course${id}.txt`).subscribe(data => {
      this.detailedCourseData = data;
    });
    this.gameData.thisCourse = {
      courseName: dataDet.data.name,
      courseId: dataDet.data.id,
      courseHoles: {
        hole1:{
          parNum: dataDet.data.holes[0].teeBoxes[0].par,
          ydg: dataDet.data.holes[0].teeBoxes[0].yards
        },
        hole2:{
          parNum: dataDet.data.holes[1].teeBoxes[0].par,
          ydg: dataDet.data.holes[1].teeBoxes[0].yards
        },
        hole3:{
          parNum: dataDet.data.holes[2].teeBoxes[0].par,
          ydg: dataDet.data.holes[2].teeBoxes[0].yards
        },
        hole4:{
          parNum: dataDet.data.holes[3].teeBoxes[0].par,
          ydg: dataDet.data.holes[3].teeBoxes[0].yards
        },
        hole5:{
          parNum: dataDet.data.holes[4].teeBoxes[0].par,
          ydg: dataDet.data.holes[4].teeBoxes[0].yards
        },
        hole6:{
          parNum: dataDet.data.holes[5].teeBoxes[0].par,
          ydg: dataDet.data.holes[5].teeBoxes[0].yards
        },
        hole7:{
          parNum: dataDet.data.holes[6].teeBoxes[0].par,
          ydg: dataDet.data.holes[6].teeBoxes[0].yards
        },
        hole8:{
          parNum: dataDet.data.holes[7].teeBoxes[0].par,
          ydg: dataDet.data.holes[7].teeBoxes[0].yards
        },
        hole9:{
          parNum: dataDet.data.holes[8].teeBoxes[0].par,
          ydg: dataDet.data.holes[8].teeBoxes[0].yards
        },
        hole10:{
          parNum: dataDet.data.holes[9].teeBoxes[0].par,
          ydg: dataDet.data.holes[9].teeBoxes[0].yards
        },
        hole11:{
          parNum: dataDet.data.holes[10].teeBoxes[0].par,
          ydg: dataDet.data.holes[10].teeBoxes[0].yards
        },
        hole12:{
          parNum: dataDet.data.holes[11].teeBoxes[0].par,
          ydg: dataDet.data.holes[11].teeBoxes[0].yards
        },
        hole13:{
          parNum: dataDet.data.holes[12].teeBoxes[0].par,
          ydg: dataDet.data.holes[12].teeBoxes[0].yards
        },
        hole14:{
          parNum: dataDet.data.holes[13].teeBoxes[0].par,
          ydg: dataDet.data.holes[13].teeBoxes[0].yards
        },
        hole15:{
          parNum: dataDet.data.holes[14].teeBoxes[0].par,
          ydg: dataDet.data.holes[14].teeBoxes[0].yards
        },
        hole16:{
          parNum: dataDet.data.holes[15].teeBoxes[0].par,
          ydg: dataDet.data.holes[15].teeBoxes[0].yards
        },
        hole17:{
          parNum: dataDet.data.holes[16].teeBoxes[0].par,
          ydg: dataDet.data.holes[16].teeBoxes[0].yards
        },
        hole18:{
          parNum: dataDet.data.holes[17].teeBoxes[0].par,
          ydg: dataDet.data.holes[17].teeBoxes[0].yards
        },
      }


    };
  }
}

