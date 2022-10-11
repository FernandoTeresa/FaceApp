import { Router } from '@angular/router';
import { User } from './../../classes/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userservice:UserService, public router:Router) { }

  ngOnInit(): void {
  }

  adduser(values:User){
    let user = <HTMLInputElement>document.getElementById("new_username");
    let pass = <HTMLInputElement>document.getElementById("new_password");
    if ((user.value != '') && (pass.value != '')){ 
      this.userservice.addUser(values);
      this.router.navigate(['/']);
    }else{
      alert('Invalid Username or Password');
    }
    let x = <HTMLInputElement>document.getElementById("new_username");
    x.value = '';
    let y = <HTMLInputElement>document.getElementById("new_password");
    y.value = '';
    let z = <HTMLInputElement>document.getElementById("new_fname");
    z.value = '';
    let h = <HTMLInputElement>document.getElementById("new_lname");
    h.value = '';
  }


}
