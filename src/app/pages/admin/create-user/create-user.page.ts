import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
  @Input() controller: ModalController;
  data: User = new User();
  constructor() { }

  ngOnInit() {
  }
  closeModal(){
    this.controller.dismiss();
  }
  submit(){}

}
