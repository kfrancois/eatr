import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.scss'],
  providers: [UserService],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().then(u => this.user = u);
  }
}
