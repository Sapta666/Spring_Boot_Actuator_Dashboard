import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { PrimeNGConfig } from 'primeng/api';
import { HttpStatusCardsConComponent } from './components/http-status-cards/http-status-cards-con.component';
import { HttpChartsConComponent } from './components/http-charts/http-charts-con.component';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { HttpRequestListConComponent } from './components/http-request-list/http-request-list-con.component';
import { ActuatorService } from './common/services/actuator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopMenuComponent, HttpStatusCardsConComponent, HttpChartsConComponent,
    HttpRequestListConComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {

  //#region Variables

  protected canDisplay: boolean = true;

  protected chartDisplay_Subscription: Subscription;
  protected chartDisplay_Subject = new Subject();

  protected systemStatus: string = "";
  protected systemDatabase: string = "";
  protected systemDiskSpace: number = 0;
  protected processorCount: number = 0;
  protected systemUpTime: string = "";

  protected totalHeight: number = 500;

  //#endregion

  //#region Page Load

  constructor(
    private _primeNGConfig: PrimeNGConfig,
    private _actuatorService: ActuatorService
  ) {
    this._primeNGConfig.ripple = true;
  }

  ngOnInit(): void {
    this.chartDisplay_Subject
      .pipe(debounceTime(50))
      .subscribe(() => {
        this.canDisplay = false;
        setTimeout(() => {
          this.canDisplay = true;
        }, 20);
      });

    setTimeout(() => {
      this.getNecessarySystemInfo();
    }, 300);
  }

  ngOnDestroy(): void {
    this.chartDisplay_Subscription.unsubscribe();

    this.totalHeight = window.innerHeight - 500;
  }

  @HostListener('window:resize')
  public onResize() {
    this.chartDisplay_Subject.next(0);

    this.totalHeight = window.innerHeight - 500;
  }

  //#endregion

  //#region Private Functions

  private getNecessarySystemInfo(): void {
    this.getSystemHealthInfo();
    this.getProcessorCount();
    this.getSystemUpTime();
  }

  //#endregion

  //#region Control Functions

  protected onTopMenuRefresh(): void {
    this.getNecessarySystemInfo();
  }

  //#endregion

  //#region Api Functions

  private getSystemHealthInfo(): void {
    this._actuatorService
      .getSystemHealthInfo()
      .subscribe(response => {
        this.systemStatus = response?.status;
        this.systemDatabase = response?.components?.db?.details?.database;
        // converting bytes to gigabytes
        this.systemDiskSpace = response?.components?.diskSpace?.details?.free / (1024 * 1024 * 1024);
        this.systemDiskSpace = Math.floor(this.systemDiskSpace * 100) / 100;
      });
  }

  private getProcessorCount(): void {
    this._actuatorService
      .getProcessorCount()
      .subscribe(response => {
        this.processorCount = response?.measurements?.[0]?.value
      });
  }

  private getSystemUpTime(): void {
    this._actuatorService
      .getSystemUpTime()
      .subscribe(response => {
        let value: number = response?.measurements?.[0]?.value;

        this.systemUpTime = `${Math.floor(value / 3600)}h`;
        value -= Math.floor(value / 3600) * 3600;
        this.systemUpTime += `:${Math.floor(value / 60)}m`;
        value -= Math.floor(value / 60) * 60;

        value = Math.floor(value);
        this.systemUpTime += `:${value}s`;

      });
  }

  //#endregion

}
