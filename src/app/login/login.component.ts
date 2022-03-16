import { Component, OnInit } from '@angular/core';
import { AppService } from '../_services/app.service';
import { ILogin } from '../_interface/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showInvalidUser: boolean = false;
  constructor(
    private appService: AppService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit(data: ILogin){
    this.showInvalidUser = false;
    const responce = this.appService.checkLoginUser(data);
    if(responce){
      this.route.navigate(['/dashboard']);
    }else{
      this.showInvalidUser = true;
    }
  }

}
