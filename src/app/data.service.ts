import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private emitScrollEvent = new BehaviorSubject({});
  getValue = this.emitScrollEvent.asObservable();

  constructor() { }
  emitValue(data: any) {
    this.emitScrollEvent.next(data);
  }
}
