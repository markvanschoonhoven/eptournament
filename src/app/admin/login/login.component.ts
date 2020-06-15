import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from '../../../shared/services/firebaseauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: FirebaseauthService) { }

  ngOnInit() {
  }

}
