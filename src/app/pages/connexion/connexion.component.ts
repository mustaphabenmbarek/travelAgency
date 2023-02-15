import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent {
  connexionForm: FormGroup;

  constructor() {
    this.connexionForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(null),
    });
  }

  onSubmit() {}
}
