import {Component, inject, Input, OnInit} from "@angular/core";
import {ControlContainer, FormControl, FormGroup} from "@angular/forms";
@Component({
    selector: "app-error-msg",
    templateUrl: "./error-msg.component.html",
    styleUrls: ["./error-msg.component.scss"],
    standalone: true,
})
export class ErrorMsgComponent implements OnInit {
    formControl!: FormControl;
    @Input() control!: string;
    @Input() errorField?: string;
    errorType!: Object;
    controlContainer = inject(ControlContainer);

    ngOnInit() {
        this.formControl = (this.controlContainer.control as FormGroup).get(this.control) as FormControl;
    }
}
