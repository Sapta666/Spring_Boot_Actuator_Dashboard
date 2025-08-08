import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-prac-01',
  standalone: true,        
  imports: [ButtonModule, RippleModule],
  templateUrl: './prac-01.component.html'
})
export class Prac01Component {
  
}
