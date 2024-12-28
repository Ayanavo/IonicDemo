import {Component, inject, Input, OnInit} from "@angular/core";
import {ControlContainer, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {IonSelect, IonSelectOption} from "@ionic/angular/standalone";
import {ErrorMsgComponent} from "../error-msg/error-msg.component";

@Component({
    selector: "app-dropdown",
    templateUrl: "./dropdown.component.html",
    styleUrls: ["./dropdown.component.scss"],
    standalone: true,
    imports: [ReactiveFormsModule, IonSelect, IonSelectOption, ErrorMsgComponent],
})
export class DropdownComponent implements OnInit {
    @Input() ControlAccess!: {identifier: string; placeholder?: string; label: string; type: string; options: string[]; validators: Object};
    controlContainer = inject(ControlContainer);
    fromGroup!: FormGroup;
    fieldControl!: FormControl;
    ngOnInit() {
        this.fromGroup = this.controlContainer.control as FormGroup;
        this.fieldControl = this.fromGroup.get(this.ControlAccess["identifier"]) as FormControl;
    }
}
