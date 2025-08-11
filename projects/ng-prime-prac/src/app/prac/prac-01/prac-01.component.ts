import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Confirmation, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-prac-01',
  standalone: true,        
  imports: [ButtonModule, RippleModule, DialogModule],
  templateUrl: './prac-01.component.html'
})
export class Prac01Component {

  //#region Variables

  //#endregion

  //#region Page Load

  constructor(
    private _confirmationService: ConfirmationService
  ) {

  }

  //#endregion

  //#region Component Functions

  protected onSubmitClick(): void {
    let tempEventEmt: EventEmitter<any> = new EventEmitter(); 

    let confirmation: Confirmation = {
      message: "Submit clicked",
      header:  "Confirm Dialog Testing",
      key: "dialog-two",
      accept: () => {
        alert("accepted")
      },
      reject: () => {
        alert("reject")
      },

      acceptEvent: tempEventEmt
    };    

    setTimeout(() => {
      tempEventEmt.emit("testing");
    },3000);

    tempEventEmt.subscribe(value => {
      console.log(value);
    });

    this._confirmationService.confirm(confirmation);
  }

  //#endregion
  
}
