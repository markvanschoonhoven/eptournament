import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Referee } from 'src/shared/model/referee.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-referee-new',
  templateUrl: './referee-new.component.html',
  styleUrls: ['./referee-new.component.css']
})
export class RefereeNewComponent implements OnInit {
  Referees$: Observable<Referee[]>;

  constructor(private router: Router, private route: ActivatedRoute, private tournamentservice: TournamentService) { }

  addReferee(refereename: string) {
    const newReferee = new Referee (null, refereename);
    this.tournamentservice.addReferees(newReferee).subscribe(
      result => { this.tournamentservice.getReferees() }
    );
    this.router.navigate(['referee']);
    }   

  ngOnInit() {
  }

}