import { ArticleDetailComponent  } from './components/article-detail/article-detail.component';
import { ChildHomeComponent } from './components/home/child-home/child-home.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"home", component: HomeComponent, children: [
    { path:"child", component: ChildHomeComponent},
  ]},
  {path:'detail/:slug', component: ArticleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
