import { Component, OnInit } from '@angular/core';
import { MaPeepsService } from '../ma-peeps.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = [];

  onSetToInactive(id: number) {
    this.maPeepsService.onSetToInactive(id);
  }

  constructor(private maPeepsService: MaPeepsService) {

  }

  ngOnInit() {
    this.users = this.maPeepsService.activeUsers;
  }

}
