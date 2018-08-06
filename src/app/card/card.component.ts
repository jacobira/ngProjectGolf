import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../services/game-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor( private gameData: GameDataService ) { }

  ngOnInit() {

  }

  playerInfo: any[] = this.gameData.players;



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
