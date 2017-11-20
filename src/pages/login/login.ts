import { Component } from '@angular/core';

import { LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = { email: '', password: '' }

  constructor(private alertController:AlertController, public loadingController: LoadingController) {

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
        let alert = this.alertController.create({
          title: 'Login',
          subTitle: 'Login correcto',
          buttons: ['Aceptar']
        });
        alert.present();
      }, 5000);
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