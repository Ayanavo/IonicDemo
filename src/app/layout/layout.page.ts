import {CommonModule} from "@angular/common";
import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton, IonSearchbar, IonToolbar, IonRouterOutlet} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {addOutline, menuOutline} from "ionicons/icons";

@Component({
    selector: "app-layout",
    templateUrl: "./layout.page.html",
    styleUrls: ["./layout.page.scss"],
    standalone: true,
    imports: [IonRouterOutlet, IonMenu, IonContent, CommonModule, FormsModule],
})
export class LayoutPage {
    constructor() {
        addIcons({menuOutline, addOutline});
    }

    public actionSheetButtons = [
        {
            text: "Delete",
            role: "destructive",
            data: {
                action: "delete",
            },
        },
        {
            text: "Share",
            data: {
                action: "share",
            },
        },
        {
            text: "Cancel",
            role: "cancel",
            data: {
                action: "cancel",
            },
        },
    ];
}
