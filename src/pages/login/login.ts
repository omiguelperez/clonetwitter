import { Component } from '@angular/core';

import { 
  LoadingController, 
  AlertController,
  NavController
} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = { email: '', password: '' }

  constructor(
    private alertController:AlertController, 
    public loadingController: LoadingController,
    public navController: NavController
  ) {

  }

  ngOnInit () {
    console.log('Arrancó el init!')
  }

  login = (): void => {
    if (this.user.email !== '' && this.user.password !== '') {
      let loading = this.loadingController.create({
        content: 'Please wait...'
      });
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.navController.push(TabsPage);
      }, 1000);
    } else {
      let alert = this.alertController.create({
        title: 'Login',
        subTitle: 'Login incorrecto',
        buttons: ['Aceptar']
      });
      alert.present();
    }
  }
}