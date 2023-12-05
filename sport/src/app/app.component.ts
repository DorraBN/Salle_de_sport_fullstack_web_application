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
import { MaterialModule } from '../maturial.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';

const NgxUiLoaderConf :NgxUiLoaderConfig={
  bgsColor: 'red',
  fgsColor: '#FFFFFF',
  pbColor: 'red',
  text: 'Loading...',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  fgsType: SPINNER.ballSpinClockwise,
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
  
}

@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: './app.component.html',

  imports: [HomeComponent,TeamComponent,FormulaireComponent,ConceptComponent,ScrollComponent,FormulComponent,FooterComponent, RouterLink, RouterOutlet,MaterialModule,ReactiveFormsModule,HttpClientModule,ToastrModule,NgxUiLoaderModule],

  styleUrls: ['./home/home.component.css'],
})

export class AppComponent {
  title = 'homes';
}