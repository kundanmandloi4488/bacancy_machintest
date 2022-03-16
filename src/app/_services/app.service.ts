import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegistration, ILogin, IFakeData } from '../_interface/interfaces';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private httpClient: HttpClient
  ) { }

  setLocalstorageData(data: IRegistration): void{
    localStorage.setItem('registrationData', JSON.stringify(data));
  }

  checkLoginUser(data: ILogin): boolean{
    const localStorageData = JSON.parse(localStorage.getItem('registrationData') || '{}');
    if(localStorageData.email == data.userName && localStorageData.password == data.password){
      return true;
    }else{
      return false;
    }
  }

  getFakeData(): Observable<IFakeData[]> {
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts`).pipe(map((el) => el.slice(0, 20))); 
  }

  logout(): void{
    localStorage.clear();
  }
  
}
