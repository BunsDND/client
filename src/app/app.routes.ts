import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PostComponent } from './pages/post/post.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent}, 
    {path: 'post', component: PostComponent}, 
    {path: 'welcome', component: WelcomeComponent} 
];
