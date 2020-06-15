import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Division } from '../../../shared/model/division.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  Divisions$: Observable<Division[]>;

  constructor(private tournamentservice: TournamentService) { }

  addDivision(divisionname: string) {
    const newDivision = new Division (null, divisionname);
    this.tournamentservice.addDivisions(newDivision).subscribe();
  }

  deleteDivision(value) {
    this.tournamentservice.deleteDivision(value).subscribe();
  }

  ngOnInit() {
    this.Divisions$ = this.tournamentservice.getDivisions();
  }
}