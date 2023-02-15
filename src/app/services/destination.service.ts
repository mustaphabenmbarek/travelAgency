import { Injectable } from '@angular/core';

export interface Destination {
  name: string;
  //arrivalDate: Date;
  //dateDeparture: Date;
  maxAcceptedTravelers: number
}

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

