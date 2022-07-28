import { ArticleService } from './../../services/article.services';
import { Article } from './../../models/article';
import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
    selector: 'app-home',
    template: `
    <p>Home works 1</p>
    <ul>
        <li *ngFor="let article of articles | async" style="border: 1px solid black; padding: 20px; margin-bottom:10px;">
            {{article.title}}<br>
            <a [routerLink]="['/detail', article.slug]">Read more</a>
        </li>
    </ul>
    <router-outlet></router-outlet>
    `,
    styles: [

    ]
})

export class HomeComponent implements OnInit{
    articles: Observable<Article[]>;
    constructor(private readonly articleService: ArticleService){
        this.articles = this.articleService.article$;
    }
    ngOnInit(): void {
        this.articles = this.articleService.article$;
    }
}