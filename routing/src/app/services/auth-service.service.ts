import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  // Variable to track user authentication status
  isLoggedIn: boolean = false;

  constructor() { }

  // Simulates user login by setting isLoggedIn to true
  login(){
    this.isLoggedIn = true;
  }

  // Simulates user logout by setting isLoggedIn to false
  logout(){
    this.isLoggedIn = false;
  }

  // Checks if the user is authenticated
  isAuthenticated(){
    return this.isLoggedIn;
  }
}
