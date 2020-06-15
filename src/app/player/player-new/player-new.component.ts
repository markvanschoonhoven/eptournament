import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Player } from '../../../shared/model/player.model';
import { Team } from 'src/shared/model/team.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css']
})
export class PlayerNewComponent implements OnInit {
  Players$: Observable<Player[]>;
  Teams$: Observable<Team[]>;  

  constructor(private router: Router, private route: ActivatedRoute, private tournamentservice: TournamentService) { }

  addPlayer(playername: string, playerage: number, playerphoto: string, teamid: number) {
    const newPlayer = new Player (null, playername, playerage, playerphoto, teamid);
    this.tournamentservice.addPlayers(newPlayer).subscribe(
      result => {this.tournamentservice.getPlayers() }
    );
    this.router.navigate(['player']);
    }

  ngOnInit() {
    this.Players$ = this.tournamentservice.getPlayers();
    this.Teams$ = this.tournamentservice.getTeams();    
  }
}
