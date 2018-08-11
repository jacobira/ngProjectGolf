import { Injectable } from '@angular/core';
import { CourseInfo } from '../interfaces/course-info';

@Injectable({
  providedIn: 'root'
})

export class GameDataService {

  constructor() { }

  players: any[] = [];

  thisCourse: CourseInfo;

  generalInfo: any;


}
