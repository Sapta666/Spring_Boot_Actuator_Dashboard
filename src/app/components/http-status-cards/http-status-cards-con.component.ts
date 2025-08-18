import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { HelperUtils } from '../../common/utils/helper-utils';

@Component({
  selector: 'app-http-status-cards-con',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './http-status-cards-con.component.html',
})
export class HttpStatusCardsConComponent {

  //#region Variables

  private _requestData: any = null;

  protected requestInfo: any = {
    "Status200": { count: 0, lastUpd: "", },
    "Status400": { count: 0, lastUpd: "", },
    "Status404": { count: 0, lastUpd: "", },
    "Status500": { count: 0, lastUpd: "", },
  }

  //#endregion

  //#region Attributes

  @Input() set pLast100Info(value: any[]) {
    this._requestData = value;
    this.requestInfo = {
      "Status200": { count: 0, lastUpd: "", },
      "Status400": { count: 0, lastUpd: "", },
      "Status404": { count: 0, lastUpd: "", },
      "Status500": { count: 0, lastUpd: "", },
    };

    this.calculateDisplayValues();
  }

  //#endregion

  //#region Page Load

  constructor() {

  }

  //#endregion

  //#region Private Functions

  private calculateDisplayValues(): void {
    this.requestInfo["Status200"] = {
      count: this._requestData.filter(item => item?.response?.status == 200)?.length ?? 0,
      lastUpd: HelperUtils.getDispTimeStamp(new Date(this._requestData.findLast(item => item?.response?.status == 200)?.timestamp))
    };
    this.requestInfo["Status400"] = {
      count: this._requestData.filter(item => item?.response?.status == 400)?.length ?? 0,
      lastUpd: HelperUtils.getDispTimeStamp(new Date(this._requestData.findLast(item => item?.response?.status == 400)?.timestamp))
    };
    this.requestInfo["Status404"] = {
      count: this._requestData.filter(item => item?.response?.status == 404)?.length ?? 0,
      lastUpd: HelperUtils.getDispTimeStamp(new Date(this._requestData.findLast(item => item?.response?.status == 404)?.timestamp))
    };
    this.requestInfo["Status500"] = {
      count: this._requestData.filter(item => item?.response?.status == 500)?.length ?? 0,
      lastUpd: HelperUtils.getDispTimeStamp(new Date(this._requestData.findLast(item => item?.response?.status == 500)?.timestamp))
    };
  }

  //#endregion

}
