import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Team } from 'src/shared/model/team.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-new',
  templateUrl: './team-new.component.html',
  styleUrls: ['./team-new.component.css']
})
export class TeamNewComponent implements OnInit {
  Teams$: Observable<Team[]>;
  
  constructor(private router: Router, private route: ActivatedRoute, private tournamentservice: TournamentService) { }

  addTeam(teamname: string, teamlogo: string) {
    const newTeam = new Team (null, teamname, teamlogo);
    this.tournamentservice.addTeams(newTeam).subscribe(
      result => { this.tournamentservice.getTeams() }
    );
    this.router.navigate(['team']);
    }  

  ngOnInit() {
  }

}
