import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Player } from '../../../shared/model/player.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
Players$: Observable<Player[]>;

  constructor(private router: Router, private route: ActivatedRoute, private tournamentservice: TournamentService) { }

  deletePlayer(value) {
    this.tournamentservice.deletePlayer(value).subscribe();
    this.router.navigate(['player']);
  } 

  ngOnInit() {
    this.Players$ = this.tournamentservice.getPlayers();
  }
}
