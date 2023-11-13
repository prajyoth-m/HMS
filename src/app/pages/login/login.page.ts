import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signIn: boolean = true;
  signUp: boolean = false;
  showpwd: boolean = false;
  emailError: boolean = false;
  pwdError: boolean = false;
  userEmail: string = "";
  userPassword: string = "";
  userName: string = "";
  constructor(private userServices: UserService, private router: Router) { }

  ngOnInit() {
  }

  createUser() {
    console.log("create user");
  }

  doLogin() {
    console.log("login");
    const auth = btoa(this.userEmail + ":" + this.userPassword);
    this.router.navigate(['/patient/home']);
    //this.userServices.doLogin(auth).subscribe((res) => { this.userServices.user = res; }, (err) => { this.pwdError = true; });
  }

}
