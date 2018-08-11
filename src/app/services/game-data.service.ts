import { Injectable } from '@angular/core';
import { CourseInfo } from '../interfaces/course-info';
import {CourseGetterService} from './course-getter.service';

@Injectable({
  providedIn: 'root'
})

export class GameDataService {

  constructor(private courseGetter: CourseGetterService) { }

  players: any[] = [];

  thisCourse: CourseInfo;


}
