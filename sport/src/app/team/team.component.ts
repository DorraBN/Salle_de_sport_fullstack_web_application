import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  imagePath1: string = 'assets/k4.jpg';
  imagePath2: string =  "assets/k5.jpg";
  imagePath3: string = 'assets/k6.jpg';
  imagePath4: string =  "assets/k7.jpg";
}
