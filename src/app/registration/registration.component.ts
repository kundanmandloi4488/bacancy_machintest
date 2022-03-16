import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../_services/app.service';
import { IRegistration } from '../_interface/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup | any;
  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      gender: [null, Validators.required],
      hobby: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      cpassword: [null, Validators.required]
    }, { 
      validator: this.confirmedValidator('password', 'cpassword')
    })
  }

  onFormSubmit(data: IRegistration): void {
    if (this.registrationForm.valid) {
      this.appService.setLocalstorageData(this.registrationForm.value);
      this.route.navigate(['/login']);
    }else{
      Object.keys(this.registrationForm.controls).forEach((key) => {
        this.registrationForm.get(key).markAsDirty();
      });
    }
  }

  confirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
  

}
