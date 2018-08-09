import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../services/game-data.service';
import { NameFilterPipe } from '../pipes/name-filter.pipe';
import { CourseGetterService } from '../services/course-getter.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor(private gameData: GameDataService, private nameFilter: NameFilterPipe, private courseInfo: CourseGetterService) { }

  ngOnInit() {
    this.checkForPlayers();
    // this.getCourseNames();
}

  playerEntered: string = '';
  playerList: any[] = this.gameData.players;
  // courseNames: string[] = [];

  // getCourseNames(){
  //   for (let i = 0; i < this.courseInfo.courseGeneral.length; i++){
  //     this.courseNames.push(this.courseInfo.courseGeneral[i].name);
  //   }
  // }
  //
  // setSelectedCourse(course){
  //   this.courseInfo.selectedCourse = course;
  //   this.getCourseId(course);
  // }
  //
  // getCourseId(course){
  //   this.courseInfo.selectedCourseId = this.courseInfo.courseGeneral.JSON.parse(course).id;
  //   this.getCourseDetails(this.courseInfo.selectedCourseId);
  // }
  //
  // getCourseDetails(id){
  //   this.courseInfo.selectedCourseDetails = this.courseInfo.httpRequestDetailed(id);
  // }

  addPlayer() {

    this.gameData.players.push(
      {
        name: this.nameFilter.transform(this.playerEntered),
        scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        inScore: 0,
        outScore: 0,
        total: 0
      }
    );

    this.playerList = this.gameData.players;
    this.checkForPlayers();
  }

  checkForPlayers(){
    if (this.playerList.length == 0) {
      document.getElementById("createCardBtn").classList.add("hidden");
    }
    if (this.playerList.length > 0) {
      document.getElementById("createCardBtn").classList.remove("hidden");
    }
  }

  removePlayer(player){
    for (let i = 0; i<this.playerList.length; i++){
      if (this.playerList[i] == player){
        this.playerList.splice(i, 1);
      }
    }

    for (let i = 0; i<this.gameData.players.length; i++){
      if (this.gameData.players[i].name == player){
        this.gameData.players.splice(i, 1);
      }
    }

    this.checkForPlayers();

    let element = document.getElementById(`${player}`);
    element.parentNode.removeChild(element);
  }

}
