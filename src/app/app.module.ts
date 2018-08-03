import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SetupComponent } from './setup/setup.component';
import { CardComponent } from './card/card.component';
import { GameDataService } from './services/game-data.service';
import { FirebaseService } from './services/firebase.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'card', component: CardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SetupComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    GameDataService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
