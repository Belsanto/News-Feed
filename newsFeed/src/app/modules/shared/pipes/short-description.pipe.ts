import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  private shortSummary:string='';
  private lengthSummary:number=0;
  transform(summary: string): string {
    this.shortSummary='';
    this.lengthSummary=(summary.length/1.8);
    if(this.lengthSummary>325){
      this.lengthSummary=325;
    }
    for (let i = 0; i < this.lengthSummary; i++) {
      this.shortSummary=this.shortSummary+summary.charAt(i);
    }
    this.shortSummary = `${this.shortSummary}...`
    return this.shortSummary;
  }

}
