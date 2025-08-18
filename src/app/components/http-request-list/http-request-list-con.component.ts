import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { HelperUtils } from '../../common/utils/helper-utils';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-http-request-list-con',
  standalone: true,
  imports: [
    TableModule, CommonModule, RippleModule,
    ButtonModule, DialogModule, SelectButtonModule,
    FormsModule, PanelModule, BadgeModule
  ],
  templateUrl: './http-request-list-con.component.html'
})
export class HttpRequestListConComponent implements OnInit {
  
  //#region Variables

  protected data: any = null;
  protected statusBadgeType: any = {
    200: "success", 
    404: "info", 
    400: "warning",
    500: "danger"
  };  

  protected selectedItem: any = null;
  protected showDialog: boolean = false;
  protected dialogTabOptions: string[] = ["Request","Response"];
  protected dialogTab: string = this.dialogTabOptions[0];

  //#endregion

  //#region Attributes

  @Input() set pData(value: any) {
    this.data = value?.map(item => {
      item.timestamp = HelperUtils.getDispTimeStamp(new Date(item?.timestamp))

      if(item.timeTaken != 0) {
        item.timeTaken = (item.timeTaken).substring(2,item?.timeTaken?.length - 1);
        item.timeTaken = Math.floor(parseFloat(item.timeTaken) * 1000);
      }
        
      return item;
    });    
  }

  @Input() pTotalHeight: number = 500;

  //#endregion

  //#region Page Load

  constructor() {
   
  }
  
  ngOnInit(): void {

  }

  @HostListener('window:resize')
  public onResize() {
   
  }

  //#endregion

  //#region Component Functions

  protected onExportToExcelClick(): void {

  }

  protected onViewDataItemClick(dataItem: any): void {
    this.selectedItem = dataItem;
    this.showDialog = true;
  }

  //#endregion

}
