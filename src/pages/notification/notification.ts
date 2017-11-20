import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  notifications: Array<Notification> = [
    { id: 1, action: 'reply', img: 'https://pbs.twimg.com/profile_images/849039710978625537/YTxV5qxk_400x400.jpg', nick_name: '@freddier', text: 'platzitter es lo mas' },
    { id: 2, action: 'reclonetwitt', img: 'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name: '@cvander', text: 'que chulo que esta esta app en iOS' },
    { id: 3, action: 'mention', img: 'https://pbs.twimg.com/profile_images/855547570323689473/I-fpilWj_400x400.jpg', nick_name: '@jorgeucano', text: 'test 1234' }
  ];

  constructor(public navCtrl: NavController) {

  }

}

interface Notification {
  id: number;
  action: string;
  img: string;
  nick_name: string;
  text: string;
}
