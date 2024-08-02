import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: `ea32-like`,
  templateUrl: `./like.component.html`,
  styleUrls: [`./like.component.css`],
})
export class LikeComponent {
  @Input() liked: any;

  @Output() sendIsLikeToParent = new EventEmitter();

  toggleLiked() {
    this.liked = !this.liked;
    this.sendIsLikeToParent.emit(this.liked);
  }
}
