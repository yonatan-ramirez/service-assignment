import { CounterService } from './counter-service.service';
import { Injectable } from '@angular/core';

@Injectable ()
export class MaPeepsService {

    activeUsers = ['Luis', 'Roy', 'Angel'];
    inactiveUsers = ['Carlos', 'Joey', 'Nathan'];

    constructor(private counterService: CounterService) {

    }

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.counter();
      }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.counter();
    }

}
