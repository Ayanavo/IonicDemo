import {CommonModule} from "@angular/common";
import {Component, inject, Input} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ModalController} from "@ionic/angular";
import {IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonTitle, IonToolbar, IonAvatar} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {arrowBackOutline} from "ionicons/icons";
@Component({
    selector: "app-detail",
    templateUrl: "./detail.page.html",
    styleUrls: ["./detail.page.scss"],
    standalone: true,
    imports: [IonAvatar, IonImg, IonIcon, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class DetailPage {
    @Input() data: any;
    modalController = inject(ModalController);
    constructor() {
        addIcons({arrowBackOutline});
    }

    dismiss() {
        this.modalController.dismiss();
    }

    setFallback(event: Event) {
        (event.target as HTMLImageElement).src = "/assets/image/placeholder.jpg";
    }
}
