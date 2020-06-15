import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Tournament } from '../../../shared/model/tournament.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  Tournaments$: Observable<Tournament[]>;

  constructor(private tournamentservice: TournamentService) { }

  addTournament(tournamentname: string, matchduration: number,intermission: number,pointswin: number,pointsdraw: number, refid:number, devid:number) {
    const newTournament = new Tournament (null,tournamentname, matchduration,intermission,pointswin,pointsdraw, refid, devid);
    this.tournamentservice.addTournaments(newTournament).subscribe();
  }

  deleteTournament(value) {
    this.tournamentservice.deleteTournament(value).subscribe();
  }

  ngOnInit() {
    this.Tournaments$ = this.tournamentservice.getTournaments();
  }
}
