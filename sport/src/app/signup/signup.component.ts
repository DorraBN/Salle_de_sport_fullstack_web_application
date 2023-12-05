import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatButtonModule,   IonicModule,MatInputModule,MatFormFieldModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
