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
            {{article.body}}
        </li>
    </ul>
    <router-outlet></router-outlet>
    `,
    styles: [

    ]
})

export class HomeComponent implements OnInit{
    articles: Observable<Article[]>;
    constructor(){
        this.articles = of<Article[]>([])
    }
    ngOnInit(): void {
        this.articles = of<Article[]>([
            {title: 'Title 1', body: 'lorem:10', slug:'title-1'},
            {title: 'Title 2', body: 'lorem:10', slug:'title-2'}
        ])
    }
}