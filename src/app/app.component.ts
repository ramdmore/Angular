import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-2';
  myData = { asdf: ['Emmet Academy Tech', true, 1234] };

  catchDataFromChild(eve: any) {
    console.log('catchDataFromChild triggered', eve);
  }

  isliked = false;

  catchIsLikedFromChild(eve: any) {
    this.isliked = eve;
  }
}
