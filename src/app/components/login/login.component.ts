import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = {'username': '', 'password': ''};
  private loggedIn = false;

  constructor(private loginService: LoginService) { }

  onSubmit(){
    
  }

  ngOnInit() {
  }

}
