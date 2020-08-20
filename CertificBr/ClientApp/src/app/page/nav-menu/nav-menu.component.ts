import { Component, ViewChild } from '@angular/core';
import { MatSidenavContainer } from "@angular/material";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { ModalService } from '../../component/modal/modal.service';
import { UserStorageService } from '../../service/user-storage.service';

declare var $: any;

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  @ViewChild('navcontainer', { static: true }) navcontainer: MatSidenavContainer;
  events: string[] = [];
  opened: boolean;
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  showMenu = false;
  isExpanded = false;
  activeMenu: any = 0;
  private listMenu: Menu[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private modalService: ModalService,
    private userService: UserStorageService
  ) {
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {

    this.showMenu = this.userService.isLogged();
  }

  toggleMenu(id) {
    if (id === this.activeMenu)
      this.activeMenu = 0;
    else
      this.activeMenu = id;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

class Menu {
  ativo: boolean;
  segmento: number;
  modalidade: number;
  id: number;
  idPai: number;
  linkIcone: string;
  linkPagina: string;
  titulo: string;
  filhos: Menu[];
}


