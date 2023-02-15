import { Component } from '@angular/core';
import { Destination, DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent {

  newDestinationName= '';
  destinations: Destination[] = this.destinationService.destinations;

  constructor (private destinationService: DestinationService ){

  }
 
  onAddTravelClick() {
    this.destinationService.addTravel(this.newDestinationName);

  }
}

