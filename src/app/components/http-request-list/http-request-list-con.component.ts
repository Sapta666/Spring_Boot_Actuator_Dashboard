import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-http-request-list-con',
  standalone: true,
  imports: [
    TableModule, CommonModule, RippleModule,
    ButtonModule,
  ],
  templateUrl: './http-request-list-con.component.html'
})
export class HttpRequestListConComponent implements OnInit {
  
  //#region Variables

  protected data: any[] = [];

  //#endregion

  //#region Attributes

  @Input() pTotalHeight: number = 500;

  //#endregion

  //#region Page Load

  constructor() {
   
  }
  
  ngOnInit(): void {
    for(let m = 0; m < 10; m++) 
      this.data.push({
        Timestamp: "14/08/2025, 1:00 PM",
        Method: "POST",
        TimeTaken: 50,
        Status: [200,400,404,500][m%4],
        Uri: "http://localhost:4200/",        
    });
  }

  @HostListener('window:resize')
  public onResize() {
   
  }

  //#endregion

  //#region Component Functions

  protected onExportToExcelClick(): void {

  }

  //#endregion

}
