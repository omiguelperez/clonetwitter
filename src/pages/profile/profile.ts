import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Twitt } from '../../commons/twitt';
import { Profile } from '../../commons/profile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  profile:Profile = {
    'img': 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg',
    'nick_name': '@omiguelperez',
    'interactions': 1,
    'github': 'omiguelperez',
    'twitter': '@omiguelperez',
    'facebook': 'omiguelperez',
    'bio': 'Oscar Pérez es un Ingeniero de Sistemas. Desarrollador de Software con Metodologías ágiles. BDD & TDD. Desarrollador Bakend con {JavaScript/Node.js}. Tiene conocimiento de Angular 2, Ionic 2, Django. En constante aprendizaje.'
  };

  notifications: Array<Twitt> = [
    { img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'platzitter es lo mas' },
    { img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'que chulo que esta esta app en iOS' },
    { img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'test 1234' },
    { img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'platzitter es lo mas' },
    { img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'que chulo que esta esta app en iOS' },
    { img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'test 1234' },
    { img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'platzitter es lo mas' },
    { img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'que chulo que esta esta app en iOS' },
    { img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'test 1234' }
  ];
  
  constructor(public navCtrl: NavController) {

  }

}
