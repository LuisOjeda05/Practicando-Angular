import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Batman', 'Hulk', 'Shazam', 'Captain America'];
  public deletedHero: string = '';

  public deleteHero(): void {
    this.deletedHero = this.heroes.shift() || '';
  }
}
