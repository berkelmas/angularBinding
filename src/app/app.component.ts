import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularBinding';
  getChild: string;

  getParent(phrase: string) {
    this.getChild= phrase;
  }

}
