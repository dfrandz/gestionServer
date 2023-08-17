import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap, } from 'rxjs/operators';
import { ServerResponse } from 'src/app/interface/server/server-response';
import { Server } from 'src/app/interface/server/server';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  private readonly apiUrl = 'http://localhost:8081/api/v1';

  constructor( private http:HttpClient) { }


  // servers$ = () => <Observable<ServerResponse>> this.http.get<ServerResponse>(`${this.apiUrl}/server/list`).pipe(
  //   tap(console.log),
  //   catchError(this.handleError)
  // )

  servers$ = <Observable<ServerResponse>> this.http.get<ServerResponse>(`${this.apiUrl}/server/list`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  save$ = (server: Server) => <Observable<ServerResponse>> this.http.post<ServerResponse>(`${this.apiUrl}/server/save`, server).pipe(
    tap(console.log),
    catchError(this.handleError)
  )
  
  pingServer$ = (serverIpAddress: string) => <Observable<ServerResponse>> this.http.get<ServerResponse>(`${this.apiUrl}/server/ping/${serverIpAddress}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  delete$ = (serverId: number) => <Observable<ServerResponse>> this.http.delete<ServerResponse>(`${this.apiUrl}/server/delete/${serverId}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )


  private handleError(error:HttpErrorResponse):Observable<never>{
    console.log(error);
    return throwError(() => `An error occurred - Error code: ${error.status}`);
  }


  private log =(response: any)=>{
    console.table(response);
  }

}
