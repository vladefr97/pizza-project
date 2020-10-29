import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
// Custom imports
import {fader} from './route-animations';
import {DisplayService} from './providers/display/display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent {
  title = 'pizza-project';


  constructor(public displayService: DisplayService) {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
