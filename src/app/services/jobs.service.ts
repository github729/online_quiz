import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { ENV } from '../env.config';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private httpOptions : any;
  
  constructor(private _http : HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cookie': '_ga=GA1.2.512438864.1539257715; _gid=GA1.2.1567879108.1539257715; __gads=ID=df831627b43e4ab7:T=1539257701:S=ALNI_MYDZkaQbLLdpYeowDSsO42KDC4cRg; __auc=cff6fb8f16662e8e7e553d63e41; __zlcmid=ophhwrwK86K0d3; G_ENABLED_IDPS=google; showComplianceDivCookie=true; csrftoken=ph1a0DPChpXf6GShYOj5e9X3GbHbM1YM6T6B5NSk36d6yrcSmbLFwKvGg22zPFoA; sessionid=k99tvt26qh9i3phmpu65u0xfexktyu22; _em_="anushamanne7@gmail.com|Anusha|Manne"; _cpem_=IUodQgZSDlUcXVZFMAsYVClIRlIBXh90VlsCHEMPQUdzFxpBAkZW; _gat_gtag_UA_3537905_1=1'
      })
    };
  }

    // GET new event
    getJobs$() {
      return this._http
        .get<any>('',this.httpOptions )
        .pipe(
          catchError(this.handleError)
        );
    }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Error: Unable to complete request. please try again later.');
  };
}
