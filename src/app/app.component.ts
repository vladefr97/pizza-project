import {Component} from '@angular/core';
// import {
//   transition,
//   trigger,
//   query,
//   style,
//   animate,
//   group,
//   animateChild
// } from '@angular/animations';
import {fader} from './route-animations';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
//   animations: [
//     trigger('myAnimation', [
//       transition('* => *', [
//         query(
//           ':enter',
//           [style({ opacity: 0 })],
//           { optional: true }
//         ),
//         query(
//           ':leave',
//           [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
//           { optional: true }
//         ),
//         query(
//           ':enter',
//           [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
//           { optional: true }
//         )
//       ])
//     ])
//
// ] // register the animations
})
export class AppComponent {
  title = 'pizza-project';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
