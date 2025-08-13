import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { PrimeNGConfig } from 'primeng/api';
import { HttpStatusCardsConComponent } from './components/http-status-cards/http-status-cards-con.component';
import { HttpChartsConComponent } from './components/http-charts/http-charts-con.component';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopMenuComponent, HttpStatusCardsConComponent, HttpChartsConComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  
  //#region Variables

  protected canDisplay: boolean = true;

  protected chartDisplay_Subscription: Subscription;
  protected chartDisplay_Subject = new Subject();

  //#endregion

  //#region Page Load

  constructor(private _primeNGConfig: PrimeNGConfig) {
    this._primeNGConfig.ripple = true;
  }
  
  ngOnInit(): void {
    this.chartDisplay_Subject
      .pipe(debounceTime(50))
      .subscribe(() => {
        this.canDisplay = false;
        setTimeout(() => {
          this.canDisplay = true;
        },20);
      });
  }

  ngOnDestroy(): void {
    this.chartDisplay_Subscription.unsubscribe();
  }

  @HostListener('window:resize')
  public onResize() {
    this.chartDisplay_Subject.next(0);    
  }

  //#endregion

}
