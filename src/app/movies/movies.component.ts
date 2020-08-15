import { Component, OnInit } from '@angular/core';
import { ThemoviedbApiService } from "../services/themoviedb-api.service";
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less'],
})
export class MoviesComponent implements OnInit {

  movies: any[];

  constructor(private themoviedbApiService: ThemoviedbApiService, private movieService: MovieService) { }

  ngOnInit(): void {
    this.themoviedbApiService.getMovies().subscribe((movies: any) => {
      this.movieService.getFavoriteMovies().subscribe((favMovies: any) => {
        let movs: any[] = movies.results
        let favMovs: any[] = favMovies.accountFavMovies
        movs.map((mov: any) => {
          favMovs.map((favMov: any) => {
            mov.isFavorite = mov.isFavorite === true ? true : (""+mov.id === favMov.movieId)
          })
        })
        this.movies = movs.sort((movA, movB) => movB.vote_average - movA.vote_average);
      });
    });
  }
}
