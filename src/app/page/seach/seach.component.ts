import { Component } from '@angular/core';
import { Destination } from 'src/app/services/destination.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.scss']
})
export class SeachComponent {
  currentSearch = '';
  travels: Destination[] = [];

  submitForm() {
    
  }

}


