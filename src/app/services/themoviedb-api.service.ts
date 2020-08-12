import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const API_MOVIE_DOMAIN = "https://api.themoviedb.org";
const API_KEY_MOVIE = "4a203abe54a397a3160c4eb42e275f70";
const API_IMAGE_DOMAIN = "https://image.tmdb.org";

@Injectable()
export class ThemoviedbApiService {

  constructor(private http: HttpClient) { 
    
  }

  getMovies(): Observable<any> {
    return this.http.get(API_MOVIE_DOMAIN+"/3/discover/movie?sort_by=popularity.desc&api_key="+API_KEY_MOVIE);
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(API_MOVIE_DOMAIN+"/3/movie/"+id+"?api_key="+API_KEY_MOVIE);
  }

  getImage(path: string): Observable<any> {
    return this.http.get(API_IMAGE_DOMAIN+"/t/p/w500"+path, {
      responseType: 'arraybuffer'
    });
  }
}
