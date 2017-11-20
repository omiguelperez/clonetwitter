import { Component } from '@angular/core';

import { 
  LoadingController, 
  AlertController,
  NavController
} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = { email: '', password: '' }

  constructor(
    private alertController:AlertController, 
    public loadingController: LoadingController,
    public navController: NavController,
    private userService: UserService
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

      this.userService.loginUser(this.user.email, this.user.password)
        .then(response => {
          loading.dismiss();
          if (response !== undefined) {
            this.navController.push(TabsPage);
          } else {
            let alert = this.alertController.create({
              title: 'Login',
              subTitle: 'Usuario y/o contraseña incorrectos..',
              buttons: ['Aceptar']
            });
            alert.present();
          }
        });
    } else {
      let alert = this.alertController.create({
        title: 'Login',
        subTitle: 'Complete los campos.',
        buttons: ['Aceptar']
      });
      alert.present();
    }
  }
}