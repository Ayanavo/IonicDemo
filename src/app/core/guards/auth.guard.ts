import {CanActivateFn, Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = async (route, state) => {
    const authService = inject(AuthenticationService);
    const router = inject(Router);
    if (!JSON.parse(localStorage.getItem("currentUser") as string)?.access_token) {
        router.navigate(["/login"]);
        return false;
    }

    return true;
};
