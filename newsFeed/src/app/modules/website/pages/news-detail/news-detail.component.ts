import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { switchMap } from 'rxjs/operators';
import { Article } from 'src/app/models/article.models';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit, OnDestroy {

  page: number | string | null=0;
  q: string| null='';
  lang: string| null='';
  index: string| number| null=-1;
  articleChosen: Article | null = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private newsService: NewsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(
      switchMap((params)=>{
        this.page = params.get('page');
        this.q= params.get('q');
        this.lang= params.get('lang');
        this.index= params.get('i');
        if(Number(this.index)>=0){
        return this.newsService.getAll('colombia','es',Number(this.page))
        }else{return  this.newsService.getAll('colombia','es',0);}
      })
    ).subscribe(data=>{
      if(Number(this.index)>=0){
      this.articleChosen=data.articles[Number(this.index)];
      }else{
        this.router.navigate(['/home']);
      }
    })
  }

  ngOnDestroy(){
    window.clearInterval(Number(this.index));
  }
  goToBack() {
    this.location.back();
  }
}
