import { Injectable } from '@angular/core';
import { Destination } from '../page/destination/destination.component';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  destinations: Destination[] = [];

  constructor() { }

  addTravel(name: string) {
    this.destinations.push({
      name,
      maxAcceptedTravelers: 2

    });
  
  }

}

