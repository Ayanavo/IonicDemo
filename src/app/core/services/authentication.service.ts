import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";
import {environment} from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class AuthenticationService {
    private readonly baseUrl = "https://accounts.spotify.com/api/token";
    private readonly http = inject(HttpClient);

    login(payload: {[index: string]: string}) {
        const headers = new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(`${environment.client_id}:${environment.client_secret}`)}`,
        });
        const body = new HttpParams().set("grant_type", "client_credentials");
        return this.http.post<{access_token: string; token_type: string; expires_in: number}>(this.baseUrl, body, {headers: headers, observe: "response"});
    }
}
