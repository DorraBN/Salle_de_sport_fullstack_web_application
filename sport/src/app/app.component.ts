import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {ScrollComponent} from './scroll/scroll.component';
import {TeamComponent} from './team/team.component';
import {ConceptComponent} from './concept/concept.component';
import {FooterComponent} from './footer/footer.component';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {FormulComponent} from './formul/formul.component';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: './app.component.html',

  imports: [HomeComponent,TeamComponent,FormulaireComponent,ConceptComponent,ScrollComponent,FormulComponent,FooterComponent, RouterLink, RouterOutlet],

  styleUrls: ['./home/home.component.css'],
})

export class AppComponent {
  title = 'homes';
}