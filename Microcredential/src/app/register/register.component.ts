import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regiterUserData = {}
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  registerUser(){
    this._auth.registerUser(this.regiterUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    
  }
}
