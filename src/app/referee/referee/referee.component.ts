import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.css']
})
export class RefereeComponent implements OnInit {
  Referees$: Observable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute, private tournamentservice: TournamentService) { }

  deleteReferee(value) {
    this.tournamentservice.deleteReferee(value).subscribe();
    this.router.navigate(['referee']);
  }

  ngOnInit() {
    this.Referees$ = this.tournamentservice.getReferees();
  }

}