import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  authForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]]
    });
  }
  onSubmit(): void {
    console.log('authForm: ', this.authForm.value);
  }
}
