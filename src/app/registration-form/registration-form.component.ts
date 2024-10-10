import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  
  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(16),
      this.noSpecialChars
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    address: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      this.requireOneLetter
    ]),
    dob: new FormControl('', [Validators.required]),
    country: new FormControl('India', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    agreeToTerms: new FormControl(false, [this.mustBeChecked])
  });

  noSpecialChars(control: AbstractControl): ValidationErrors | null {
    if (!control.value.match(/^[a-zA-Z0-9]+$/)) {
      return { invalidUsername: true };
    }
    return null;
  }

  requireOneLetter(control: AbstractControl): ValidationErrors | null {
    if (!control.value.match(/[a-zA-Z]/)) {
      return { invalidPassword: true };
    }
    return null;
  }

  mustBeChecked(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return { mustBeChecked: true };
    }
    return null;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
    }
  }
}
