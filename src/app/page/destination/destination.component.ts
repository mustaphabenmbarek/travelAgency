import { Component } from '@angular/core';
import { DestinationService } from 'src/app/services/destination.service';

export interface Destination {
  name: string;
  //arrivalDate: Date;
  //dateDeparture: Date;
  maxAcceptedTravelers: number
}

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent {

  currentSearch = '';
  destinations: Destination[] = this.destinationService.destinations;

  constructor (private destinationService: DestinationService ){

  }
 
  onAddTravelClick() {
    this.destinationService.addTravel(this.currentSearch);

  }
}

