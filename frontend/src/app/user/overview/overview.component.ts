import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.scss'],
})
export class OverviewComponent {

  user: User;

  constructor() { }

}
