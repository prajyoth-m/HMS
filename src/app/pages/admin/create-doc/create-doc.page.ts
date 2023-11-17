import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Doctor } from 'src/app/models/doctor';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create-doc',
  templateUrl: './create-doc.page.html',
  styleUrls: ['./create-doc.page.scss'],
})
export class CreateDocPage implements OnInit {
  @Input() controller: ModalController;
  users: User[] = new Array();
  data: Doctor = new Doctor();
  user: User = new User();
  isEdit: boolean = false;
  selectedUser: number = 0;
  constructor() { }

  ngOnInit() {
    let usr = new User();
    usr.email = "test@test.com";
    usr.name = "Sai";
    usr.role = "patient";
    usr.userID = 101;
    this.users.push(usr);
    usr = new User();
    usr.email = "test@test.com";
    usr.name = "Balaji";
    usr.role = "patient";
    usr.userID = 102;
    this.users.push(usr);
    usr = new User();
    usr.email = "test@test.com";
    usr.name = "Satya";
    usr.role = "patient";
    usr.userID = 103;
    this.users.push(usr);
    usr = new User();
    usr.email = "test@test.com";
    usr.name = "Naga";
    usr.role = "patient";
    usr.userID = 104;
    this.users.push(usr);
    if(this.isEdit){
      this.user = this.users.find(usr=>usr.userID ===this.selectedUser);
    }
    console.log(this.isEdit);
    console.log(this.data);
    console.log(this.user);
  }

  closeModal() {
    this.controller.dismiss();
  }

  submit(){}

  compareFn(u1: User,u2: User): boolean{
    return u1 && u2 ? u1.userID===u2.userID:u1==u2;
  }

}
