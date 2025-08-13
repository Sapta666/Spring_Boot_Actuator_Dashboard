import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { PrimeNGConfig } from 'primeng/api';
import { HttpStatusCardsConComponent } from './components/http-status-cards/http-status-cards-con.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopMenuComponent, HttpStatusCardsConComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  //#region Variables

  //#endregion

  //#region Page Load

  constructor(private _primeNGConfig: PrimeNGConfig) {
    this._primeNGConfig.ripple = true;
  }

  //#endregion

}
