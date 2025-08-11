import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [AccordionModule, ButtonModule, RippleModule,
      CommonModule
  ],
  templateUrl: './top-menu.component.html'
})
export class TopMenuComponent {
  
  //#region Variables

  protected activeIndex = -1;
  protected isHeaderDropdownDisabled: boolean = true;

  //#endregion

  //#region Attributes

  //#endregion

  //#region Life Cycle Hooks

  constructor() {

  }

  //#endregion

}
