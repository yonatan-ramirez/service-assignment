import { MaPeepsService } from './../ma-peeps.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: Array<string> = [];

  onSetToActive(id: number) {
    this.maPeepsService.onSetToActive(id);
  }

  constructor(private maPeepsService: MaPeepsService) {

  }

  ngOnInit() {
    this.users = this.maPeepsService.inactiveUsers;
  }

}
