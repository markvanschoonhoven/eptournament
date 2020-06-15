import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Division } from 'src/shared/model/division.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-division-new',
  templateUrl: './division-new.component.html',
  styleUrls: ['./division-new.component.css']
})
export class DivisionNewComponent implements OnInit {
  Divisions$: Observable<Division[]>;

  constructor(private router: Router, private route: ActivatedRoute, private tournamentservice: TournamentService) { }

  addDivision(divisionname: string) {
    const newDivision = new Division (null, divisionname);
    this.tournamentservice.addDivisions(newDivision).subscribe(
      result => {this.tournamentservice.getDivisions() }
    );
    this.router.navigate(['division']);
    }    

  ngOnInit() {
  }

}
