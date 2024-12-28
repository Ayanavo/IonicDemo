import {Component, inject, Input, OnInit} from "@angular/core";
import {ControlContainer, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {IonInput, IonItem} from "@ionic/angular/standalone";
import {ErrorMsgComponent} from "../error-msg/error-msg.component";

@Component({
    selector: "app-text",
    templateUrl: "./text.component.html",
    styleUrls: ["./text.component.scss"],
    standalone: true,
    imports: [IonItem, ReactiveFormsModule, IonInput, ErrorMsgComponent],
})
export class TextComponent implements OnInit {
    @Input() ControlAccess!: {identifier: string; label: string; type: string; validators: Object};
    controlContainer = inject(ControlContainer);
    fromGroup!: FormGroup;
    fieldControl!: FormControl;
    ngOnInit() {
        this.fromGroup = this.controlContainer.control as FormGroup;
        this.fieldControl = this.fromGroup.get(this.ControlAccess["identifier"]) as FormControl;
    }
}
