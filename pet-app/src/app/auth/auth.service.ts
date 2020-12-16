import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";

export interface AuthResponseData{
  kind?: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthService {
  user = new BehaviorSubject<User>(null);


  constructor(private http: HttpClient){
  }

  signup(email: string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDupB6Vfu6srT4s-EtuebGdEQ1aPtJiSLg',
    {email: email,
    password: password,
    returnSecureToken: true
  })
    .pipe(catchError(this.handleError),
      tap(responseData => {
      this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
    }));
  }


  login(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDupB6Vfu6srT4s-EtuebGdEQ1aPtJiSLg',
    {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handleError),
    tap(responseData => {
      this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
    }));
  }


  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    const user = new User (email, userId, token, expirationDate);
    //console.log(user);
    this.user.next(user);
  }

  private handleError(errorResponse: HttpErrorResponse){
    let errorMessage = 'An unknown error occurred!';

    if(!errorResponse.error || !errorResponse.error.error){
      return throwError(errorMessage);
    }
      switch(errorResponse.error.error.message){
        case 'EMAIL_EXISTS': errorMessage = 'This email already exists'; break;
        case 'EMAIL_NOT_FOUND': errorMessage = 'This email does not exist'; break;
        case 'INVALID_PASSWORD': errorMessage = 'This password is not valid'; break;
    }

    return throwError(errorMessage);


  }

}
