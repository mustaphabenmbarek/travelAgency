import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.scss']
})
export class SeachComponent {
  destinationForm: FormGroup;

 constructor() {
  this.destinationForm = new FormGroup({
    destination: new FormControl(null, [Validators.required]),

  });
 }
  onSubmit() {
    console.log(this.destinationForm);
  }

  get destination() {
    return this.destinationForm.get('destination') as FormControl;
  }
  // currentSearch = '';
  // travels: Destination[] = [];

  // submitForm() {

  // }

}


