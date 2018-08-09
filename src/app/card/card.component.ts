import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../services/game-data.service';
import { CourseGetterService } from '../services/course-getter.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor( private gameData: GameDataService, private courseGetter: CourseGetterService) { }

  ngOnInit() {
    // this.getHolePars();
  }

  playerInfo: any[] = this.gameData.players;
  holePars: number[] = [];

  // getHolePars(){
  //   for (let i = 0; i < this.courseGetter.selectedCourseDetails.data.holes.length; i ++){
  //     this.holePars.push(this.courseGetter.selectedCourseDetails.data.holes[i]);
  //   }
  // }

  calcScores(){
    for (let i=0; i<this.playerInfo.length; i++){

      let inScore: number = 0;
      let outScore: number = 0;

      for (let a=0; a<=8; a++){
        let storedInScore: number = Number(this.playerInfo[i].scores[a]);
        if (isNaN(storedInScore+inScore) == false){
          inScore = inScore + storedInScore;
        }
      }

      for (let a=9; a<=17; a++){
        let storedOutScore: number = Number(this.playerInfo[i].scores[a]);
        if (isNaN(storedOutScore+outScore) == false){
          outScore = outScore + storedOutScore;
        }
      }

      let totalScore: number = inScore + outScore;

      this.playerInfo[i].inScore = inScore;
      this.playerInfo[i].outScore = outScore;
      this.playerInfo[i].total = totalScore;
    }
    console.log(this.playerInfo);
  }

}
