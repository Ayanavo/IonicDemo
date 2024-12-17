import {HttpClient} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class MovieService {
    http = inject(HttpClient);

    getMovieList(pagetonext?: string, searchTerm?: string) {
        return this.http.get<{data: any[]; next_cursor: string}>(`https://jsonfakery.com/movies/infinite-scroll${pagetonext ? "?cursor=" + pagetonext : ""}${searchTerm ? "&search=" + searchTerm : ""}`);
    }
}
