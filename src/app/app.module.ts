import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SetupComponent } from './setup/setup.component';
import { CardComponent } from './card/card.component';
import { GameDataService } from './services/game-data.service';
import { FirebaseService } from './services/firebase.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { CourseGetterService } from './services/course-getter.service';

const appRoutes: Routes = [
  { path: 'setup', component: SetupComponent },
  { path: 'card', component: CardComponent },
  { path: '', redirectTo: '/setup', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    CardComponent,
    NameFilterPipe
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'ng-golf-project'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    GameDataService,
    FirebaseService,
    NameFilterPipe,
    CourseGetterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
