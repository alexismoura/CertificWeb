import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserStorageService } from './user-storage.service';
import { environment } from '../../environments/environment';
import { BreadcrumbStorageService } from './breadcrumb-storage.service';

const API_URL = "API";

@Injectable({
	providedIn: 'root'
})
export class BreadcrumbService {

	private waySubject = new BehaviorSubject<any>(null);

	constructor(
		private breadcrumbStorage: BreadcrumbStorageService,
		private httpClient: HttpClient
	) {
		this.breadcrumbStorage.hasWayStorage() && this.wayNotify();
	}

	wayNotify() {
		const way = this.breadcrumbStorage.getWayStorage();
		this.waySubject.next(way);
	}

	getWay() {
		return this.waySubject.asObservable();
	}

	setWay(way) {
		this.breadcrumbStorage.setWayStorage(way);
		this.wayNotify();
	}

	removeWay() {
		this.breadcrumbStorage.removeWayStorage();
		this.waySubject.next(null);
	}

	isLogged() {
		return this.breadcrumbStorage.hasWayStorage();
	}
}
