import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  Teams$: Observable<any[]>;
  
  constructor(private router: Router, private route: ActivatedRoute,private tournamentservice: TournamentService) { }

  deleteTeam(value) {
    this.tournamentservice.deleteTeam(value).subscribe();
    this.router.navigate(['team']);
    console.log(this.Teams$);
  }
  
  editTeam(id) {
    this.router.navigate(['/team-edit/' + id]);
  }  
  

  ngOnInit() {
    this.Teams$ = this.tournamentservice.getTeams();
  }
}
