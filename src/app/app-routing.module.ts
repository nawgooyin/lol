import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './views/profile/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile/:server/:summonerName', component: ProfileComponent },
  { path: 'header', component: HeaderComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
