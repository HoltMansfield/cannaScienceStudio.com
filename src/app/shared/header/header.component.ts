import { Component, OnInit } from '@angular/core';
import {NGB_DIRECTIVES} from '@ng-bootstrap/ng-bootstrap';

import '../../../style/bootstrap/scss/bootstrap.scss';

@Component({
  selector: 'my-header',
  templateUrl: 'header.component.html',
  directives: [
    NGB_DIRECTIVES
  ]
})
export class HeaderComponent implements OnInit {

  ngOnInit() { }
}
