import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private router: Router) { }

  public logout(){
    console.log('dang xuat roi ne');
    this.router.navigate(['/login']);
    this.loggedIn.next(false);
  }

  public login(user: string){
    console.log('Ban da dang nhap duoc roi ', user);
    this.router.navigate(['/home']);
    this.loggedIn.next(true);
  }

  public isLoggedIn(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }
}
