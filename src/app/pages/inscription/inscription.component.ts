import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
inscriptionForm: FormGroup

constructor(){
  this.inscriptionForm = new FormGroup({
    firstname: new FormControl(null,[Validators.required]),
    lastname: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
}
onSubmit(){
  
}

}