import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Logo } from './logo/logo';
import { Profile } from './profile/profile';
import { DynamicRouteProfile } from './dynamic-route-profile/dynamic-route-profile';


export const routes: Routes = [
    {
        path: 'about', component: About 
    },
    {
        path: 'contact', component: Contact
    },
    {
        path: '', component: Logo , data:{about:"This is logo page"}
    },
       {
        path: 'home', component: Home
    },
       {
        path: 'profile', component: Profile
    },
    {
        path: 'dynamicProfile', component: DynamicRouteProfile
    },
       {
        path: '**', component: PageNotFound // this is called wildcard route , it should be the last route in the array , if added at the start it will match all routes and other routes will never be reached so order matters here .
    }
];
