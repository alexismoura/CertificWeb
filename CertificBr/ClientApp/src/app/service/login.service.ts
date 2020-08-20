import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
//import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { UserStorageService } from './user-storage.service';




@Injectable({
    providedIn: 'root'
})

export class LoginService {
    imports: [
        BrowserModule,
        //HttpModule
    ]
    private data: any = {};
    constructor(
        private httpClient: HttpClient,
        private router: Router,
        private userService: UserStorageService,
        //private http: Http,
    ) { }

    Login(user: string, password: string) {

        let login = new Login();
        login.user = user;
        login.password = password;
        this.httpClient.post<Login>('api/Login/EnterIn', login, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
            .subscribe(result => {

                var json = result.password;
                this.data.user = user;
                this.data.password = password;
                this.userService.setUserStorage(this.data);
              this.router.navigate(["/import-afd"]);

            }, error => console.error(error));

    }

}

class Login {
    user: string;
    password: string;
}
