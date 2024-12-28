import {CommonModule} from "@angular/common";
import {Component, inject, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {IonContent, IonButton} from "@ionic/angular/standalone";
import {DropdownComponent} from "src/app/components/dropdown/dropdown.component";
import {EmailComponent} from "src/app/components/email/email.component";
import {PasswordComponent} from "src/app/components/password/password.component";

@Component({
    selector: "app-register",
    templateUrl: "./register.page.html",
    styleUrls: ["./register.page.scss"],
    standalone: true,
    imports: [IonButton, PasswordComponent, EmailComponent, DropdownComponent, ReactiveFormsModule, RouterModule, IonContent, CommonModule],
})
export class RegisterPage implements OnInit {
    constructor() {}
    loginForm!: FormGroup;
    formbuilder = inject(FormBuilder);
    ngOnInit() {
        this.loginForm = this.formbuilder.group({
            username: ["", Validators.required],
            gender: [""],
            email: ["", (Validators.required, Validators.email)],
            password: ["", Validators.required],
        });
    }

    register() {
        // Your code to register the user goes here
    }
}
