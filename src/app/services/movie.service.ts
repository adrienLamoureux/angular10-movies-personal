import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  addMovieFavorite(movieId: string) {
    return this.http.post<any>('/api/movies/' + movieId, {})
  }

  removeMovieFavorite(movieId: string) {
    return this.http.delete<any>('/api/movies/' + movieId)
  }

  getFavoriteMovies() {
    return this.http.get<any>('/api/movies')
  }
}
