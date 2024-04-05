import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../../User_Structure';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [HttpClientModule, CommonModule,  RouterLink, RouterOutlet, UserDetailsComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  USER: User[] = [];
  title = 'user-card';
  httpclt = inject(HttpClient);
  udservice = inject(UserService);
  load=false;

    ngOnInit():void
    {
      this.getDatafromApi();
    }
    getDatafromApi(): void
    {
      this.httpclt.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) =>
      {
        this.udservice.addtoArray(data);
        this.USER = data;
        this.load=true;
      });
  }
  constructor(){
    this.getDatafromApi();
  }
}
