import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formul',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formul.component.html',
  styleUrl: './formul.component.css'
})
export class FormulComponent {
  imagePath1: string = 'assets/s1.jpg';
  imagePath2: string =  "assets/s2.jpg";
  imagePath3: string =  "assets/s3.jpg";
}
