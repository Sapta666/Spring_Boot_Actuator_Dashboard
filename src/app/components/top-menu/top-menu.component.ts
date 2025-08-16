import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BreakpointsEnum } from '../../common/enums/breakpoints.enum';


@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [PanelModule, ButtonModule, RippleModule,
      CommonModule
  ],
  templateUrl: './top-menu.component.html'
})
export class TopMenuComponent implements OnInit {
  
  //#region Variables

  private _previousWidth: number = 500;

  protected isPanelToggleable: boolean = false;
  protected isDropdownOpened: boolean = false;

  protected breakpointEnum: typeof BreakpointsEnum = BreakpointsEnum;

  //#endregion

  //#region Attributes

  @Input() pSystemStatus: string = "";
  @Input() pSystemDatabase: string = "";  
  @Input() pSystemDiskSpace: number = 0;  //GB
  @Input() pProcessorCount: number = 0;  
  @Input() pSystemUpTime: string = "";

  @Output() onRefresh = new EventEmitter();

  //#endregion

  //#region Life Cycle Hooks

  constructor() {

  }

  ngOnInit(): void {
    this._previousWidth = window.innerWidth;
     if(window.innerWidth <= BreakpointsEnum.xxl) {      
      this.isPanelToggleable = true;
      this.isDropdownOpened = false;
    }
  }

  @HostListener("window:resize")
  public noResize() {
    if(window.innerWidth <= BreakpointsEnum.xxl && this._previousWidth > BreakpointsEnum.xxl) {      
      this.isPanelToggleable = true;
      this.isDropdownOpened = false;
    } else if(window.innerWidth > BreakpointsEnum.xxl) {
      this.isPanelToggleable = false;
      this.isDropdownOpened = false;
    }

    this._previousWidth = window.innerWidth;
  }

  //#endregion

  //#region Component Functions

  protected onDropDownToggleClick(): void {
    this.isDropdownOpened = !this.isDropdownOpened;
  }

  protected onRefreshClick(): void {
    this.onRefresh.emit();
  }

  //#endregion

}
