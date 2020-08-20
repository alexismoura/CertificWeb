import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
import { BreadcrumbService } from '../../service/breadcrumb.service';

@Component({
    templateUrl: './render-page.component.html'
})

export class RenderPageComponent implements OnInit {

    private url: string;
    safeUrl: SafeResourceUrl;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private sanitizer: DomSanitizer,
        @Inject(DOCUMENT) private document: Document
    ) { }

    ngOnInit() {
        this.renderIframe()

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.renderIframe();
            }
        });
    }

    getRenderLinkPagina() {
        var link = window.sessionStorage.getItem("linkPagina");
        return link == null ? "" : link;
    }

    setRenderLinkPagina(linkPagina) {
        window.sessionStorage.setItem("linkPagina", linkPagina);
    }

    renderIframe() {
        if (this.activatedRoute.snapshot.params.linkPagina) {
            this.setRenderLinkPagina(this.activatedRoute.snapshot.params.linkPagina);
        }
        let containerIframe = document.querySelector(".iframe");
        let iframe: any = document.createElement('iframe');
        iframe.src = "//localhost/FolhaSenior/" + this.getRenderLinkPagina();
        iframe.className = "iframe__full";
        containerIframe.innerHTML = "";
        containerIframe.appendChild(iframe);
    }
}
