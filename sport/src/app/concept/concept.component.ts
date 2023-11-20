import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-concept',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concept.component.html',
  styleUrl: './concept.component.css'
})
export class ConceptComponent {
  imagePath1: string = 'assets/m.jpg';
}
