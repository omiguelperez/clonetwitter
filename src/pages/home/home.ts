import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listado:Array<Twitt> = [
    { img: 'https://pbs.twimg.com/profile_images/849039710978625537/YTxV5qxk_400x400.jpg', nick_name: '@freddier', text: 'platzitter es lo mas' },
    { img: 'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name: '@cvander', text: 'que chulo que esta esta app en iOS' },
    { img: 'https://pbs.twimg.com/profile_images/855547570323689473/I-fpilWj_400x400.jpg', nick_name: '@jorgeucano', text: 'test 1234' }
  ];
  
  constructor(public navCtrl: NavController) {

  }

}

interface Twitt {
  img: string;
  nick_name: string;
  text: string;
}
