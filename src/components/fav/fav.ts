import { Component, Input } from '@angular/core'

@Component({
  selector: 'fav',
  templateUrl: 'fav.html'
})
export class Fav {

  @Input() id: number;
  color = 'fav';
  icon = 'ios-heart-outline';

  like() {
    this.color = this.color === 'fav' ? 'liked' : 'fav';
    this.icon = this.icon === 'ios-heart' ? 'ios-heart-outline' : 'ios-heart';
    // alert(this.id);
  }


}