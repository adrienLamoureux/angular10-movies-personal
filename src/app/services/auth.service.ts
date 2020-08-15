    import { Injectable } from '@angular/core';
    import * as moment from "moment";
    import { HttpClient, HttpHeaders } from '@angular/common/http';
    import { Router } from '@angular/router';

    @Injectable({
    providedIn: 'root'
    })
    export class AuthService {

        private authHeader;

        constructor(private http: HttpClient, private router: Router) {
            this.authHeader = new HttpHeaders({ 
                'Access-Control-Allow-Origin':'*'
            })
        }

        login(email:string, password:string ) {
            return this.http.post<any>('/api/login', {email: email, password: password}, {
                headers: this.authHeader,
                withCredentials: true,
            }).subscribe((response: Response) => { this.setSession(response); this.router.navigate(['/movies']);}, (err) => { console.error(err) } )
        }
            
        private setSession(authResult) {
            localStorage.setItem('id_token', authResult.token);
            localStorage.setItem("expires_at", JSON.stringify(authResult.expireTm) );
        }          

        logout() {
            localStorage.removeItem("id_token");
            localStorage.removeItem("expires_at");
        }

        public isLoggedIn() {
            return moment().unix() < this.getExpiration();
        }

        isLoggedOut() {
            return !this.isLoggedIn();
        }

        getExpiration() {
            return JSON.parse(localStorage.getItem("expires_at"));
        }    
    }
