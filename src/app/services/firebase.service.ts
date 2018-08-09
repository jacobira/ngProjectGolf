import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import { GameDataService } from './game-data.service';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
}
