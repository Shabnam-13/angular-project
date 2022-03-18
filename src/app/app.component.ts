import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Books';

  public names: string[] = [];
  public text: string = '';

  constructor() {
    this.names.push('Dune','To Kill A Mockingbird','The Great Gatsby','Don Quixote','Of Mice And Men');
  }
}