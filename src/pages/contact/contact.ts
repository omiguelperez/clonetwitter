import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  profile:Profile = {
    'img': 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg',
    'nick_name': '@omiguelperez',
    'interactions': 1,
    'github': 'omiguelperez',
    'twitter': '@omiguelperez',
    'facebook': 'omiguelperez',
    'bio': 'Oscar Pérez es un Ingeniero de Sistemas. Desarrollador de Software con Metodologías ágiles. BDD & TDD. Desarrollador Bakend con {JavaScript/Node.js}. Tiene conocimiento de Angular 2, Ionic 2, Django. En constante aprendizaje.'
  };

  notifications: Array<Notification> = [
    { id: 1, action: 'reply', img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'platzitter es lo mas' },
    { id: 2, action: 'reclonetwitt', img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'que chulo que esta esta app en iOS' },
    { id: 3, action: 'mention', img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'test 1234' },
    { id: 1, action: 'reply', img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'platzitter es lo mas' },
    { id: 2, action: 'reclonetwitt', img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'que chulo que esta esta app en iOS' },
    { id: 3, action: 'mention', img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'test 1234' },
    { id: 1, action: 'reply', img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'platzitter es lo mas' },
    { id: 2, action: 'reclonetwitt', img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'que chulo que esta esta app en iOS' },
    { id: 3, action: 'mention', img: 'https://pbs.twimg.com/profile_images/903694094475685888/5_piqAOV_400x400.jpg', nick_name: '@omiguelperez', text: 'test 1234' }
  ];
  
  constructor(public navCtrl: NavController) {

  }

}

interface Profile {
  img: string;
  nick_name: string;
  interactions: number;
  github: string;
  twitter: string;
  facebook: string;
  bio: string;
}

interface Notification {
  id: number;
  action: string;
  img: string;
  nick_name: string;
  text: string;
}
