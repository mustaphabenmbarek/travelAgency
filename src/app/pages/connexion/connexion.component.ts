import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl:'./connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
connexionForm: FormGroup
forbiddenPasswords = [1234, 'abcd'];

forbiddenPasswordsValidators(control: FormControl):{forbidden:boolean}| null{
  if(!this.forbiddenPasswords.includes(control.value)) return null;
return{
  forbidden:true
}
}


constructor(){
  this.connexionForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });
  
}
onSubmit(){
  console.log('win');
}
}
