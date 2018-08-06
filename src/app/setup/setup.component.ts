import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../services/game-data.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor(private gameData: GameDataService) { }

  ngOnInit() {
  }

  playerEntered: string = '';
  playerList: any[] = this.gameData.players;

  addPlayer() {
    this.gameData.players.push(
      { name: this.playerEntered,
        scores: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        inScore: 0,
        outScore: 0,
        total: 0
      }
    );

    this.playerList = this.gameData.players;

    if (this.playerList.length == 0){
      document.getElementById("createCardBtn").classList.add("hidden");
    }
    if (this.playerList.length > 0){
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

    if (this.playerList.length == 0){
      document.getElementById("createCardBtn").classList.add("hidden");
    }
    if (this.playerList.length > 0){
      document.getElementById("createCardBtn").classList.remove("hidden");
    }

    let element = document.getElementById(`${player}`);
    element.parentNode.removeChild(element);
  }


}
