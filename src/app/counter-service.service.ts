import { EventEmitter } from '@angular/core';

export class CounterService {
  // tslint:disable-next-line:no-inferrable-types
  num: number = 5;
  updateNum = new EventEmitter<number>();
  constructor() {
  }
  counter() {
    this.num++;
    console.log(this.num);
    this.updateNum.emit(this.num);
  }
}
