import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RideResponse } from '../models/rider';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getRiders(): Observable<RideResponse> {
    const mockRiders: RideResponse = {
      riders: [
        {
          name: 'John Doe',
          age: 29,
          screamLevel: 'HIGH'
        },
        {
          name: 'Jane Smith',
          age: 35,
          screamLevel: 'MEDIUM'
        },
        {
          name: 'Lil Tommy',
          age: 8,
          screamLevel: 'EXTREME'
        },
        {
          name: 'Sally Ride',
          age: 12,
          screamLevel: 'LOW'
        },
        {
          name: 'Mike Thriller',
          age: 25,
          screamLevel: 'HIGH'
        }
      ]
    };
  
    return of(mockRiders); // Using 'of' from RxJS to return an observable of mock data
  }
}
