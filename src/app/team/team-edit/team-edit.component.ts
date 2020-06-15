import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Team } from 'src/shared/model/team.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private tournamentservice: TournamentService) { }

  id: number = this.route.snapshot.params.id;
  Teams$: Observable<any[]>;  

  editTeam(id, teamname, teamlogo) {
    const updateOrgTeam = new Team (id, teamname, teamlogo);
    this.tournamentservice.editTeam(updateOrgTeam).subscribe(
      result => { this.tournamentservice.getTeam() }
    );
    this.router.navigate(['team']);
    } 

  ngOnInit() {
    this.Teams$ = this.tournamentservice.findTeam(this.id);
  }

}
