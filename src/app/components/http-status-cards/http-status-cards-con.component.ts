import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-http-status-cards-con',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './http-status-cards-con.component.html',
})
export class HttpStatusCardsConComponent {
  
  //#region Variables

  protected stateOptions: string[] = [
    "Success",
    "Page Not Found",
    "Invalid",
    "Server Error"
  ];

  protected stateValue: string = this.stateOptions[0];

  //#endregion

  //#region Page Load

  constructor() {
    
  }

  //#endregion

}
