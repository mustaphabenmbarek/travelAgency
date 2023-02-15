import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
resetForm: FormGroup;

  constructor (){
    this.resetForm = new FormGroup({
      password1: new FormControl(null),
      password2: new FormControl(null),
      
    })
  }

  onSubmit(){
    
  }
}
