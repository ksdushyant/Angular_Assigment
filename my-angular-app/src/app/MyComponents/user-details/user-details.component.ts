import { Component, inject } from '@angular/core';
import { User } from '../../User_Structure';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  title = "user-details"
  route:ActivatedRoute=inject(ActivatedRoute);
  user : User | undefined;
  USER: User[] = [];
  httpclt = inject(HttpClient);
  load= false;
  

  getDatafromApi(id:Number): void
    {
      this.httpclt.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe((data: any) =>
      {
        this.user=data;
        console.log(data);
        this.load=true;
      });
    }
  constructor(){
    const userCardId=Number(this.route.snapshot.params['id']);
    this.getDatafromApi(userCardId);
  }
    
}
