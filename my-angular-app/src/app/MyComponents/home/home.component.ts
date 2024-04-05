import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../User_Structure';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  USER : User[] = [];
  title = 'app-comp1';
  httpclt = inject(HttpClient);
  udservice = inject(UserService);

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
        console.log(data);
      });
    }
} 
