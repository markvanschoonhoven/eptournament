import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Host } from '@angular/core';
import { TournamentService } from '../shared/services/tournament.service';
import { FirebaseauthService } from '../shared/services/firebaseauth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { PlayerComponent } from './player/player/player.component';
import { TeamComponent } from './team/team/team.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { TournamentComponent } from './tournament/tournament/tournament.component';
import { TournamentNewComponent } from './tournament/tournament-new/tournament-new.component';
import { TournamentEditComponent } from './tournament/tournament-edit/tournament-edit.component';
import { DivisionComponent } from './division/division/division.component';
import { DivisionNewComponent } from './division/division-new/division-new.component';
import { GameComponent } from './game/game/game.component';
import { GameNewComponent } from './game/game-new/game-new.component';
import { GameEditComponent } from './game/game-edit/game-edit.component';
import { LoginComponent } from './admin/login/login.component';
import { environment } from 'src/environments/environment';
import { RefereeComponent } from './referee/referee/referee.component';
import { PlayerNewComponent } from './player/player-new/player-new.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { TeamNewComponent } from './team/team-new/team-new.component';
import { TeamEditComponent } from './team/team-edit/team-edit.component';
import { RefereeNewComponent } from './referee/referee-new/referee-new.component';
import { RefereeEditComponent } from './referee/referee-edit/referee-edit.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'login',component: LoginComponent},
{ path: 'home', component: HomeComponent },
{ path: 'division', component: DivisionComponent},
{ path: 'division/:id', component: DivisionComponent},
{ path: 'division-new', component: DivisionNewComponent},
{ path: 'division-new/:id', component: DivisionNewComponent},
{ path: 'tournament', component: TournamentComponent},
{ path: 'tournament/:id', component: TournamentComponent},
{ path: 'tournament-new', component: TournamentNewComponent},
{ path: 'tournament-new/:id', component: TournamentNewComponent},
{ path: 'tournament-edit', component: TournamentNewComponent},
{ path: 'tournament-edit/:id', component: TournamentNewComponent},
{ path: 'team', component: TeamComponent},
{ path: 'team/:id', component: TeamComponent},
{ path: 'team-new', component: TeamNewComponent},
{ path: 'team-new/:id', component: TeamNewComponent},
{ path: 'team-edit', component: TeamEditComponent},
{ path: 'team-edit/:id', component: TeamEditComponent},
{ path: 'player', component: PlayerComponent},
{ path: 'player/:id', component: PlayerComponent},
{ path: 'player-new', component: PlayerNewComponent},
{ path: 'player-new/:id', component: PlayerNewComponent},
{ path: 'game', component: GameComponent},
{ path: 'game/:id', component: GameComponent},
{ path: 'gameNewComponent', component: GameNewComponent},
{ path: 'gameNewComponent/:id', component: GameNewComponent},
{ path: 'gameEditComponent', component: GameEditComponent},
{ path: 'gameEditComponent/:id', component: GameEditComponent},
{ path: 'referee', component: RefereeComponent},
{ path: 'referee/:id', component: RefereeComponent},
{ path: 'referee-new', component: RefereeNewComponent},
{ path: 'referee-new/:id', component: RefereeNewComponent},
{ path: 'referee-edit', component: RefereeEditComponent},
{ path: 'referee-edit/:id', component: RefereeEditComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    HomeComponent,
    TournamentComponent,
    TournamentNewComponent,
    TournamentEditComponent,
    DivisionComponent,
    DivisionNewComponent,
    GameComponent,
    GameNewComponent,
    GameEditComponent,
    LoginComponent,
    RefereeComponent,
    PlayerNewComponent,
    PlayerEditComponent,
    TeamNewComponent,
    TeamEditComponent,
    RefereeNewComponent,
    RefereeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

  ],
  providers: [TournamentService, FirebaseauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
