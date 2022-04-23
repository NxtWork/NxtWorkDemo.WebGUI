import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NxtUser } from '../model/nxt-user.model';

@Injectable({
  providedIn: 'root'
})
export class NxtUserService {

  constructor(private http: HttpClient, @Inject('API_BASE_URL') private baseUrl: string) { }

  getAll(): Observable<NxtUser[]> {
    return this.http.get<NxtUser[]>(this.baseUrl + 'users').pipe(
      map((nxtUsers: NxtUser[]) => nxtUsers),
      catchError(err => throwError(err))
    );
  }

  getById(id: string): Observable<NxtUser> {
    return this.http.get<NxtUser>(this.baseUrl + 'users/' + id).pipe(
      map((nxtUser: NxtUser) => nxtUser),
      catchError(err => throwError(err))
    );
  }
}
