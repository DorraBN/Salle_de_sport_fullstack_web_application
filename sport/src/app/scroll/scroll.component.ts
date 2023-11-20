
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.css'
})
export class ScrollComponent {
  shouldShow = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Mettre à jour le statut de la visibilité de la flèche
    this.shouldShow = window.scrollY > 20 || document.documentElement.scrollTop > 20;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}