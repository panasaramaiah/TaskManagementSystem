import { Routes } from '@angular/router';
import { Home } from '../component/home/home';
import { Dashboard } from '../component/dashboard/dashboard';
import { Profile } from '../component/profile/profile';
import { UpdateProfile } from '../component/update/update-profile/update-profile';
import { ReactiveForms } from '../component/reactive-forms/reactive-forms';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'dashboard', component: Dashboard},
    {path: 'ReactiveForms', component: ReactiveForms},
    {path: 'profile', component: Profile},
    { path: 'update-profile/:id', component: UpdateProfile }
];
