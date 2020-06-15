import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from '../../shared/services/firebaseauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: FirebaseauthService) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn) { this.router.navigate (['/login'])}
  }

}
