import { Component, OnInit } from '@angular/core';
import { AppService } from '../_services/app.service';
import { IFakeData } from '../_interface/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading: boolean = true;
  listingData: IFakeData[] = [];
  showError: boolean = false;
  constructor(
    private appService: AppService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.getFakeData();
  }

  getFakeData(): void {
    this.showError = false;
    this.appService
      .getFakeData()
      .subscribe(
        (response) => {
          this.loading = false;
          this.listingData = response;
        },
        (error) => {
          this.loading = false;
          this.showError = true;
        }
      );
  }

  logout(): void{
    this.appService.logout();
    this.route.navigate(['/registration']);
  }

}
