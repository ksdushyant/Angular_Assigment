import { Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { UserCardComponent } from './MyComponents/user-card/user-card.component';
import { UserDetailsComponent } from './MyComponents/user-details/user-details.component';

export const routes: Routes = [
{
    path : 'home',
    component : HomeComponent
},

{
    path : 'user-card',
    component : UserCardComponent
},
{
    path : 'user-details/:id',
    component : UserDetailsComponent
},
{
    path : '',
    component : HomeComponent
}
];
