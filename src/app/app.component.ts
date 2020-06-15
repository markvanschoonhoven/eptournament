import { Component } from '@angular/core';
import { FirebaseauthService } from '../shared/services/firebaseauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private authService: FirebaseauthService) { }
  title = 'eptournament';

  ngOnInit() {
    if (!this.authService.isLoggedIn) { this.router.navigate (['/login'])}
  }

}
