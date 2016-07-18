import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {NGB_DIRECTIVES} from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from './shared';

import { HeaderComponent } from './shared/header';

import '../style/app.scss';
import '../style/bootstrap/scss/bootstrap.scss';


@Component({
  selector: 'my-app',
  providers: [ApiService],
  directives: [
    ...ROUTER_DIRECTIVES,
    NGB_DIRECTIVES,
    HeaderComponent
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private api: ApiService) {
  }
}
