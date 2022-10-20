import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { FaceAppService } from 'src/app/services/face-app.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(public router:Router, public userservice:UserService, public faceappservice:FaceAppService) { }

  ngOnInit(): void { 
  }

  updateuser(value: User){
     let pass = <HTMLInputElement>document.getElementById("new_password");
     let repeat_pass = <HTMLInputElement>document.getElementById("repeat_password");

     if (pass?.value != repeat_pass?.value){
           alert("Passwords dont match");
     }else{
       this.userservice.updateUser(value);
       this.router.navigate(['/']);
     }

  }

  
}
