import {Routes} from "@angular/router";
import {LayoutPage} from "./layout/layout.page";
import {PageNotFoundPage} from "./page-not-found/page-not-found.page";
import {authGuard} from "./core/guards/auth.guard";

export const routes: Routes = [
    {
        path: "",
        component: LayoutPage,
        canActivate: [authGuard],
        children: [
            {
                path: "home",
                loadComponent: () => import("./home/home.page").then((m) => m.HomePage),
            },
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full",
            },
            {
                path: "detail",
                loadComponent: () => import("./detail/detail/detail.page").then((m) => m.DetailPage),
            },
            {
                path: "layout",
                loadComponent: () => import("./layout/layout.page").then((m) => m.LayoutPage),
            },
        ],
    },

    {
        path: "login",
        loadComponent: () => import("./auth/login/login.page").then((m) => m.LoginPage),
    },
    {
        path: "register",
        loadComponent: () => import("./auth/register/register.page").then((m) => m.RegisterPage),
    },
    {
        path: "**",
        component: PageNotFoundPage,
    },
];
