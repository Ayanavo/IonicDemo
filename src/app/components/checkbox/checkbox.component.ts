import {Component, inject, Input, OnInit} from "@angular/core";
import {ControlContainer, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {IonCheckbox} from "@ionic/angular/standalone";
import {ErrorMsgComponent} from "../error-msg/error-msg.component";

@Component({
    selector: "app-checkbox",
    templateUrl: "./checkbox.component.html",
    styleUrls: ["./checkbox.component.scss"],
    standalone: true,
    imports: [IonCheckbox, ReactiveFormsModule, ErrorMsgComponent],
})
export class CheckboxComponent implements OnInit {
    @Input() ControlAccess!: {identifier: string; placeholder?: string; label: string; type: string; validators: string[]};
    controlContainer = inject(ControlContainer);
    fromGroup!: FormGroup;
    fieldControl!: FormControl;
    ngOnInit() {
        this.fromGroup = this.controlContainer.control as FormGroup;
        this.fieldControl = this.fromGroup.get(this.ControlAccess["identifier"]) as FormControl;
    }
}