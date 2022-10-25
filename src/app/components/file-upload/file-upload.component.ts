import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  file: File |null = null;

  constructor(public userservice:UserService) { }

  ngOnInit(): void {
  }

  onFilechange(event: any) {
    this.file = event.target.files[0]
  }
  
  upload() {
    if (this.file) {
      this.userservice.uploadfile(this.file).subscribe(resp => {
        alert("Uploaded")
      })
    } else {
      alert("Please select a file first")
    }
  }


 }

