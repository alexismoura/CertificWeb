import { Component, AfterContentInit, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserStorageService } from '../../service/user-storage.service';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
//import { UserIdleService } from 'angular-user-idle';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    user: any;
    session: any;
    private data: any = {};
    private url: string;
    safeUrl: SafeResourceUrl;
    caminho;

    constructor(
        private userStorage: UserStorageService,
        //private userIdle: UserIdleService,
        //private breadcrumbService: BreadcrumbService
    ) { }

    ngOnInit() {

        this.user = this.userStorage.getUserStorage();
        this.session = this.getCookie();
        this.caminho = [{
            caminho: { NomeCompleto: "Página inicial" }
        }]

        if (this.user == null)
            this.loginService();
        //this.breadcrumbService.setWay(this.caminho);
        //this.renderIframe();
    }

    getCookie() {
        var pairs = document.cookie.split(";");
        var cookies: any = {};

        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");
            cookies[(pair[0] + '').trim()] = unescape(pair[1]);
        }
        return cookies.ANGULAR_SessionId;
    }

    loginService() {
        this.data = this.userStorage.getUserStorage();
    }

}
