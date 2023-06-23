import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;

  constructor(private router: Router) { }

  login(userName: string, password: string): Observable<boolean> {
   console.log(userName);
   console.log(password);
   this.isUserLoggedIn = userName === 'admin' && password === 'admin';
   localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
 
   return of(this.isUserLoggedIn).pipe(
     delay(1000),
     tap(val => {
       console.log("Is User Authentication successful: " + val);
       const redirectUrl = this.getRedirectUrl();
       this.router.navigateByUrl(redirectUrl);
     })
   );
 }
 
 private getRedirectUrl(): string {
   const redirect = localStorage.getItem('redirect');
   localStorage.removeItem('redirect');
   return redirect || '/home';
 }

 logout(): void {
   this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
   }
}

