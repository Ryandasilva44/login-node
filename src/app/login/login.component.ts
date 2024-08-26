import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  loginWithNode() {
    this.authService.loginWithNode(this.name, this.email).subscribe(
      (response) => (this.message = response.message),
      (error) => (this.message = error.error.message)
    );
  }
}
