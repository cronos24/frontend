import { Injectable, NgZone } from '@angular/core';
import { CanActivate,  Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Helper } from '../Helpers/Helper';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public zone: NgZone, public router: Router, private toastr: ToastrService,) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!Helper.isNextStep) {
        this.router.navigate([route.url[0].path]) //you can redirect user to any page here ( Optional )
        if (Helper.Message!=null && Helper.Message!='') {
          this.toastr.error(Helper.Message);
        }else{
          this.toastr.error('No tiene permitido realizar esta acción !!!.');
        }        
         return false;  //block navigation
    }
    else {
      return Helper.isNextStep || true;  // allow navigation
    }
  }
  
}
