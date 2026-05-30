import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
 loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),

    mobile: new FormControl('',[
      Validators.required,
      Validators.pattern('^[0-9]{10}$')
    ])
  });

  onSubmit() {
    alert('Form Submitted!');
    console.log(this.loginForm.value);
  }

}
