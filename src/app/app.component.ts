import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// OnInit to add information on initialization
export class AppComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  num: number = 0;
  constructor(private counterService: CounterService) {

  }
  ngOnInit() {
    this.num = this.counterService.num;
    this.counterService.updateNum.subscribe((num: number) => this.num = num);
  }

}
