import { Component, OnInit, Input } from '@angular/core';
import { ThemoviedbApiService } from "../services/themoviedb-api.service";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less'],
  providers:  [ ThemoviedbApiService ]
})
export class MovieCardComponent implements OnInit {

  @Input() movie: any;
  
  public movieImg: SafeResourceUrl = ' ';

  constructor(private themoviedbApiService: ThemoviedbApiService, private sanitization: DomSanitizer, private authService: AuthService) { }

  ngOnInit(): void {
    this.themoviedbApiService.getImage(this.movie.poster_path).subscribe((img: any) => {
      this.movieImg = this.sanitization.bypassSecurityTrustResourceUrl("data:image/jpeg;base64, "+ new Buffer(img, 'binary').toString('base64'));
    })
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  addFavorite(title: string): void {

  }

  isFavorite(title: string): boolean {
    return false;
  }

  removeFavorite(title: string): void {

  }

}
