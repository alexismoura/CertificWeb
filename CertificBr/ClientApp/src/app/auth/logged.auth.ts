import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserStorageService } from '../service/user-storage.service';

@Injectable({ providedIn: 'root'})

export class LoggedAuth implements CanActivate {
    
    constructor(public userService: UserStorageService, private router:Router) {}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (this.userService.isLogged()) {
            this.router.navigate(['']);
            return false;
        } 
        
        return true;
    }
}