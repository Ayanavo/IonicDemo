import {Component, inject, OnInit, signal, WritableSignal} from "@angular/core";
import {InfiniteScrollCustomEvent, ModalController} from "@ionic/angular";
import {
    IonAvatar,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonImg,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonItem,
    IonLabel,
    IonList,
    IonLoading,
    IonMenuButton,
    IonSearchbar,
    IonTitle,
    IonToolbar,
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {addOutline, alertCircleOutline, menuOutline, star} from "ionicons/icons";
import {DetailPage} from "../detail/detail/detail.page";
import {MovieService} from "../service/movie.service";
import {BehaviorSubject, debounce, debounceTime, distinctUntilChanged, of} from "rxjs";

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"],
    standalone: true,
    imports: [IonSearchbar, IonButton, IonButtons, IonMenuButton, IonSearchbar, IonImg, IonIcon, IonLoading, IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonInfiniteScroll, IonInfiniteScrollContent],
    providers: [ModalController],
})
export class HomePage implements OnInit {
    nextpageurl: string = "";

    service = inject(MovieService);
    modalController = inject(ModalController);
    filteredMovies: any[] | undefined;
    searchTerm: string | undefined;
    constructor() {
        addIcons({star, alertCircleOutline, menuOutline, addOutline});

        this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((searchTerm) => {
            this.filterMovies(searchTerm);
        });
    }
    movies: WritableSignal<any[]> = signal([]);
    loading: boolean = true;
    private searchSubject = new BehaviorSubject<string>("");
    ngOnInit(): void {
        this.service.getMovieList(undefined, this.searchTerm).subscribe((res) => {
            this.nextpageurl = res.next_cursor;
            this.movies.set(res.data);
            this.filteredMovies = res.data; // Filtered movies for search functionality
            this.loading = false;
        });
    }

    onIonInfinite(ev: InfiniteScrollCustomEvent) {
        this.service.getMovieList(this.nextpageurl, this.searchTerm).subscribe((res) => {
            this.nextpageurl = res.next_cursor;
            this.movies.set([...this.movies(), ...res.data]);
            (ev.target as HTMLIonInfiniteScrollElement).complete();
        });
    }

    onSearch(event: any) {
        const searchTerm = event.target?.value.toLowerCase();
        this.searchSubject.next(searchTerm); // Emit search term
    }

    async openModal(item: any) {
        const modal = await this.modalController.create({
            component: DetailPage,
            componentProps: {data: item}, // Pass data to the modal
        });
        return await modal.present();
    }

    filterMovies(term: string | null | undefined) {
        this.searchTerm = term?.toLowerCase();

        if (!term) {
            // this.movies.set(this.filteredMovies as any[]);
            this.filteredMovies = this.movies();
            return;
        }
        this.service.getMovieList(this.nextpageurl, this.searchTerm).subscribe((res) => {
            console.log(res);
        });
    }

    handleImageError(event: Event) {
        (event.target as HTMLImageElement).src = "/assets/image/placeholder.jpg";
    }
}
