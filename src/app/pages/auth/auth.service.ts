import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse, User } from '@app/shared/models/user.interface';
import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(authData: User): Observable<UserResponse | void> {
    return this.http.post<UserResponse>(`${environment.API_URL}`, authData).pipe(
      map((res:UserResponse)=>{
        console.log('Res->', res);
        //saveToken()
      }), catchError((err)=>this.handlerError(err))
    );
  }
  logout(): void { }
  private readToken(): void { }
  private saveToken(): void { }
  private handlerError(err:any): Observable<never> {
    let errorMessage = "An error occured retrienving data";
    if(err){
      errorMessage = `Error code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
