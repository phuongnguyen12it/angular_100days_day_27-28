import { Observable, of  } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators'
import { Article } from './../models/article';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    constructor(){}
    get article$() {
        return of<Article[]>([
            { title: 'Title 1', body: 'lorem:10', slug:'title-1' },
            { title: 'Title 2', body: 'lorem:10', slug:'title-2' }
        ]).pipe(shareReplay(1))
    }

    getArticle(slug: string): Observable<Article|undefined> {
        return this.article$.pipe(map(articles => articles.find( ar => ar.slug === slug)));
    }
}