import { Pipe, PipeTransform } from '@angular/core';
import { GameDataService } from '../services/game-data.service';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  constructor (private gameData: GameDataService){}

  transform(value: string): string {

    let duplicate: boolean = false;

    for (let i = 0; i<this.gameData.players.length; i++){
      if (value == this.gameData.players[i].name){
         duplicate = true;
      }
    }

    let actual: string;

    if (duplicate === true){
      actual = `${value}(1)`;
    }

    if (duplicate === false){
      actual = value;
    }

    for (let i = 0; i<this.gameData.players.length; i++){
      if (actual == this.gameData.players[i].name){
        actual = `${actual}(1)`
      }
    }
    return actual;
  }
}
