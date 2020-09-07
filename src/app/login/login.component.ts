import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  errorMessage = "Invalid Login!";
  invalidLogin = false;

  constructor(private router: Router, private authentication: AuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.authentication.authenticate(this.username, this.password)) {
      this.router.navigate(['dashboard']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

}
