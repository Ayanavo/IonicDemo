import {CommonModule} from "@angular/common";
import {Component, inject, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {IonButton, IonContent, IonIcon, IonText} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {logoFacebook, logoGithub, logoGoogle} from "ionicons/icons";
import {EmailComponent} from "src/app/components/email/email.component";
import {PasswordComponent} from "src/app/components/password/password.component";
import {AuthenticationService} from "src/app/core/services/authentication.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.page.html",
    styleUrls: ["./login.page.scss"],
    standalone: true,
    imports: [ReactiveFormsModule, RouterModule, PasswordComponent, EmailComponent, IonIcon, IonText, IonButton, IonContent, CommonModule, FormsModule],
})
export class LoginPage implements OnInit {
    constructor() {
        addIcons({logoGoogle, logoFacebook, logoGithub});
    }
    loginForm!: FormGroup;
    formbuilder = inject(FormBuilder);
    service = inject(AuthenticationService);
    router = inject(Router);
    ngOnInit() {
        localStorage.removeItem("currentUser");
        this.loginForm = this.formbuilder.group({
            email: ["", (Validators.required, Validators.email)],
            password: ["", Validators.required],
        });
    }

    login() {
        this.loginForm.markAllAsTouched();
        if (this.loginForm.valid) {
            this.service.login(this.loginForm.value).subscribe((response) => {
                if (response.status === 200) {
                    localStorage.setItem(
                        "currentUser",
                        JSON.stringify({
                            access_token: response.body?.["access_token"],
                            user: this.loginForm.value,
                        })
                    );
                    this.router.navigateByUrl("/");
                }
            });
        }
    }
    forgotPassword() {}
}
