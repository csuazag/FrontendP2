import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { NewyorkComponent } from './components/newyork/newyork.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';



const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'team', component: TeamComponent },
    { path: 'newyork', component: NewyorkComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''}    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);