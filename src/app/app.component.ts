import { Component, Input } from '@angular/core';
import { NotifierService } from 'angular-notifier/lib/services/notifier.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // constructor(private notifierServices: NotifierService) {}

  bookAdd(bookName: string): void {
    console.log(bookName + ' added');
    // this.notifierServices.notify('success', bookName + ' added');
  }
  bookDelete(bookName: string): void {
    console.log(bookName + ' deleted');
  }
}
