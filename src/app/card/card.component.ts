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

}
