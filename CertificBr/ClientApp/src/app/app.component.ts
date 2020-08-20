import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import * as jquery from 'jquery';
import { Router, NavigationEnd } from '@angular/router';
import { UserStorageService } from './service/user-storage.service';
//import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isLogin: any;

  constructor(
		private router: Router,
		private userService: UserStorageService,
		//private modalService: BsModalService,
	) { }

	ngOnInit() {
		this.router.events.subscribe(event => {

			if (event instanceof NavigationEnd) {
				if (!this.userService.isLogged()) {
					this.isLogin = true
				} else {
					this.isLogin = false;
				}
			}
		});
	}

}
