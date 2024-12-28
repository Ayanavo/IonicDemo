import {CommonModule} from "@angular/common";
import {Component, inject} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {IonContent, IonIcon, IonImg, IonRippleEffect, IonText} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {home} from "ionicons/icons";
@Component({
    selector: "app-page-not-found",
    templateUrl: "./page-not-found.page.html",
    styleUrls: ["./page-not-found.page.scss"],
    standalone: true,
    imports: [IonRippleEffect, IonIcon, RouterModule, IonText, IonImg, IonContent, CommonModule, FormsModule],
})
export class PageNotFoundPage {
    isPressed: boolean = false;
    router = inject(Router);
    constructor() {
        addIcons({home});
    }

    togglePressed() {
        this.isPressed = !this.isPressed;
    }
}
