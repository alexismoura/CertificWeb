import { Injectable } from '@angular/core';

const KEY = 'way';

@Injectable({providedIn: 'root'})

export class BreadcrumbStorageService {

    hasWayStorage() {
        return !!this.getWayStorage();
    }

    setWayStorage(way) {
        window.sessionStorage.setItem(KEY, JSON.stringify(way));
    }

    getWayStorage() {
        return JSON.parse(window.sessionStorage.getItem(KEY));
    }

    removeWayStorage() {
        window.sessionStorage.removeItem(KEY);
    }
}