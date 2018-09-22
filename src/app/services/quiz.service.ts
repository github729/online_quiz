import { Injectable } from '@angular/core';
import { ENV } from '../env.config';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpErrorResponse, HttpClient} from '@angular/common/http';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'quiz'
    })
  };

  constructor(private _http: HttpClient) { }

  // GET new event
  getCourses$() {
    return this._http
      .get<any>(`${ENV.BASE_API}courses`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

    // GET new event
    getQuestions$(id : number) {
      return this._http
        .get<any>(`${ENV.BASE_API}questions/${id}`, this.httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }

  // GET new event
  getTopics$(id : number) {
    return this._http
      .get<any>(`${ENV.BASE_API}chapters/${id}`, this.httpOptions)
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
