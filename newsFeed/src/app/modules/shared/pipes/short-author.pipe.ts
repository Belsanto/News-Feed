import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortAuthor'
})
export class ShortAuthorPipe implements PipeTransform {

  private shortSummary:string='';
  transform(summary: string): string {
    this.shortSummary='';
    if(summary.length>30){
      for (let i = 0; i < 30; i++) {
        this.shortSummary=this.shortSummary+summary.charAt(i);
      }
      this.shortSummary = `${this.shortSummary}...`
      return this.shortSummary;
    }
    return summary;

  }

}
