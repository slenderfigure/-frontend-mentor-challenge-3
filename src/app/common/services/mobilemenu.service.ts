import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobilemenuService {
  private menuOpenStatesource = new Subject<boolean>();
  menuOpenState$ = this.menuOpenStatesource.asObservable();

  constructor() { }

  toggleMenu(state: boolean): void {
    this.menuOpenStatesource.next(state);
  }
}
