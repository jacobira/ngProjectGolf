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

  constructor(private gameData: GameDataService, private nameFilter: NameFilterPipe, private courseGetter: CourseGetterService) { }

  ngOnInit() {
    this.checkForPlayers();
    this.retrieveCourses();
}

  playerEntered: string = '';
  playerList: any[] = this.gameData.players;
  courseNames: any[] = [];
  currCourseDetails: any = {};
  dataGeneral: any = {};

  retrieveCourses(){
    this.courseGetter.httpRequestGeneral();

    for (let i = 0; i<this.dataGeneral.courses.length; i++){
      this.courseNames.push(`{"name":${this.dataGeneral.courses[i].name}, "id":${this.dataGeneral.courses[i].id}`);
    }
  }

  retrieveCourseDetails(id){
    this.courseGetter.httpRequestDetailed(id);
    this.currCourseDetails = this.courseGetter.dataDetailed;
  }

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
