import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    const userData ={
      username: 'david_15',
      password: '7c4a8d09ca3762af61e59520943dc26494f8941b',
    };
    this.authSvc.login(userData).subscribe(res => console.log('login'))
  }

}
