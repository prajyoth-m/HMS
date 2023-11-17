import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { CreateUserPage } from '../create-user/create-user.page';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.page.html',
  styleUrls: ['./manage-users.page.scss'],
})
export class ManageUsersPage implements OnInit {
  users: User[] = new Array();
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    let usr = new User();
    usr.email = "sai@test.com";
    usr.name = "Sai";
    usr.role = "patient";
    usr.userID = 101;
    this.users.push(usr);
    usr = new User();
    usr.email = "balaji@test.com";
    usr.name = "Balaji";
    usr.role = "patient";
    usr.userID = 102;
    this.users.push(usr);
    usr = new User();
    usr.email = "satya@test.com";
    usr.name = "Satya";
    usr.role = "patient";
    usr.userID = 103;
    this.users.push(usr);
    usr = new User();
    usr.email = "naga@test.com";
    usr.name = "Naga";
    usr.role = "patient";
    usr.userID = 104;
    this.users.push(usr);
  }

  refresh(){}

  async editUser(user: User){
    const modal = await this.modalController.create({
      component: CreateUserPage,
      componentProps: {
        controller: this.modalController,
        data: user,
        isEdit: false,
      },
    });
    modal.onDidDismiss().then((res) => {
      console.log(res);
      this.refresh();
    });
    return await modal.present();
    this.refresh();
  }

  async createUser(){
    const modal = await this.modalController.create({
      component: CreateUserPage,
      componentProps: {
        controller: this.modalController,
        isEdit: false,
      },
    });
    modal.onDidDismiss().then((res) => {
      console.log(res);
      this.refresh();
    });
    return await modal.present();
    this.refresh();
  }

}
