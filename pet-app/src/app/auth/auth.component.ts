import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  error: string = null;


  switchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObservable: Observable<AuthResponseData>;

    if(this.isLoginMode){
      authObservable = this.authService.login(email, password);
    } else{
      authObservable =  this.authService.signup(email, password);
    }

    authObservable.subscribe(
      responseData => {
        console.log(responseData);
        this.router.navigate(['/pets']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    );

    form.reset();
  }

  removeError(){
    this.error = null;
  }

}
