import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Luv2ShopFormServiceService {

  constructor() { }

  getCreditCardMoths(startMonth: number): Observable<number[]> {

    let data: number[] = [];

    //build an arr for "Month" dropdown list
    // - start at current month and loop until

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }

    return of(data);

  }
}
