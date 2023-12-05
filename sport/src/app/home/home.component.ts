import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  imagePath1: string = 'assets/R.jpg';
  imagePath2: string = 'assets/k.jpg';


  constructor(private dialog:MatDialog){}
  ngOnInit(): void {
    // Your initialization code here
  }

  signupAction() {
  const dialogConfig=new MatDialogConfig();
  dialogConfig.width="550px";
  this.dialog.open(SignupComponent,dialogConfig);
  }
 loginAction() {
    const dialogConfig=new MatDialogConfig();
    dialogConfig.width="550px";
    this.dialog.open(LoginComponent,dialogConfig);
    }
}
