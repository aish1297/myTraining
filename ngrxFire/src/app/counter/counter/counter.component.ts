import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent  {

  message: Observable<string>;
  counter: number;
  
  constructor(private store: Store<AppState>) {
     console.log(this.store.select('message'));
     this.message = this.store.select('message');
     this.counter = 1;
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'});
    console.log('spanish message dispatched');
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'});
    console.log('french message dispatched');
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
