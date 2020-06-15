import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Division } from '../model/division.model';
import { Tournament } from '../model/tournament.model';
import { Team } from '../model/team.model';
import { Player } from '../model/player.model';
import { Referee } from '../model/referee.model';
import { Observable, from } from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  constructor(private http: HttpClient) {}

  // #############################
  // ### set URL's             ###
  // #############################
  urlRoot = 'http://localhost/tournament/public/api/';

  currentTeam;

  // #############################
  // ### GET methodes          ###
  // #############################
  getTournaments(): Observable<Tournament[]> {
    return this.http
      .get<Tournament[]>(this.urlRoot + 'tournaments')
      .pipe(tap(res => console.log(res)));
  }
  getDivisions(): Observable<Division[]> {
    return this.http
      .get<Division[]>(this.urlRoot + 'divisions')
      .pipe(tap(res => console.log(res)));
  }
  getPlayers(): Observable<Player[]> {
    return this.http
      .get<Player[]>(this.urlRoot + 'players')
      .pipe(tap(res => console.log(res)));
  }
  getTeams(): Observable<Team[]> {
    return this.http
      .get<Team[]>(this.urlRoot + 'teams')
      .pipe(tap(res => console.log(res)));
  }

  getTeam(): Observable<Team[]> {
    return this.http
      .get<Team[]>(this.urlRoot + 'team')
      .pipe(tap(res => console.log(res)));
  }


  findTeam(id: number): Observable<Team> {
    return this.http
      .get<Team>(`${this.urlRoot + "teams"}/${id}`)
      .pipe(
        //map(result => result[0]),
        tap(result => {
          this.currentTeam = result;
          console.log(this.currentTeam);
        }))
  }  


  getReferees(): Observable<Referee[]> {
    return this.http
      .get<Referee[]>(this.urlRoot + 'referees')
      .pipe(tap(res => console.log(res)));
  }

  // #############################
  // ### INSERT methodes       ###
  // #############################
  addTournaments(newTournament: Tournament): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    console.log(newTournament);
    return this.http.post(this.urlRoot + 'tournament', newTournament, { headers: headers });
  }
  addDivisions(newDivision: Division): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    console.log(newDivision);
    return this.http.post(this.urlRoot + 'division', newDivision, { headers: headers });
  }
  addTeams(newTeam: Team): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    console.log(newTeam);
    return this.http.post(this.urlRoot + 'team', newTeam, { headers: headers });
  }  
  addPlayers(newPlayer: Player): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    console.log(newPlayer);
    return this.http.post(this.urlRoot + 'player', newPlayer, { headers: headers });
  }
  addReferees(newReferee: Referee): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    console.log(newReferee);
    return this.http.post(this.urlRoot + 'referee', newReferee, { headers: headers });
  }    

  // #############################
  // ### PUT methodes          ###
  // #############################
  editTeam(value) {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.put(this.urlRoot + 'team/' + value.id, { headers: headers })
  }

  // #############################
  // ### DELETE methodes       ###
  // #############################
  deleteTournament(value) {
    return this.http.delete(this.urlRoot + 'tournament' + `/${value}`);
  }
  deleteDivision(value) {
    return this.http.delete(this.urlRoot + 'division' + `/${value}`);
  }
  deleteTeam(value) {
    return this.http.delete(this.urlRoot + 'team' + `/${value}`);
  }
  deletePlayer(value) {
    return this.http.delete(this.urlRoot + 'player' + `/${value}`);
  }
  deleteReferee(value) {
    return this.http.delete(this.urlRoot + 'referee' + `/${value}`);
  }      
}
