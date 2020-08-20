import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserStorageService } from '../service/user-storage.service';

@Injectable({ providedIn: 'root'})

export class LoginAuth implements CanActivate {
    
    constructor(private userService: UserStorageService, private router:Router) {}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (this.userService.isLogged()) {
            return true;
        } 

        this.router.navigate(['/login']);
        return false;

    }
}