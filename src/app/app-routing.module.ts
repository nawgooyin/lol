import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './views/profile/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home/home.component';
import { LeaderBoardComponent } from './views/leader-board/leader-board.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile/:server/:summonerName', component: ProfileComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'leaderBoard', component: LeaderBoardComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
