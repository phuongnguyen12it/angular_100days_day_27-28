import { ArticleService } from './../../services/article.services';
import { filter, Observable, pluck, switchMap, map } from 'rxjs';
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from 'src/app/models/article';

@Component({
    selector:'article-detail',
    template:`
        <p>aaaaaaaa</p>
       <ng-container *ngIf="article$| asyn as article; else noArticle">
        <h1>{{ article.title }}</h1>
        <p>{{ article.body }}</p>
       </ng-container>
       <ng-template #noArticle>No article found</ng-template>
    `,
    styles:[]
})
export class ArticleDetailComponent {
    article$: Observable<Article|undefined>;
    constructor(private readonly route: ActivatedRoute, private readonly articleService: ArticleService){}
    ngOnInit(): void{        this.article$ = this.route.params.pipe(
            pluck('slug'),
            switchMap(slug => this.articleService.getArticle(slug)),
            filter(article => !!article)
        )
    }
}