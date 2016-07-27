import { Component } from '@angular/core';
import { Modal, NavController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {

  constructor(private navCtrl: NavController) {
  }
  
  openCreateRecordModal() {
    let modal = Modal.create(CreateNewRecordModal);
    this.navCtrl.present(modal);
  }
}

@Component({
  templateUrl: 'build/pages/page1/create-new-password-component.html'
})
class CreateNewRecordModal {
  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {}
}

