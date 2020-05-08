import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProfileComponent } from './views/profile/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home/home.component';
import { SummonerService } from './services/summoner/summoner.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SummonerSearchComponent } from './components/summoner-search/summoner-search.component';
import { SummonerRankComponent } from './components/summoner-rank/summoner-rank.component';
import { LolLoaderComponent } from './components/lol-loader/lol-loader.component';
import { MatchHistoryComponent } from './components/match-history/match-history.component';
import { MatchHistoryService } from './services/matchHistory/matchHistory.service';
import { ChampionRotationComponent } from './components/champion-rotation/champion-rotation.component';
import { ChampionRotationService } from './services/championRotation/champtionRotation.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    HomeComponent,
    SummonerSearchComponent,
    SummonerRankComponent,
    LolLoaderComponent,
    MatchHistoryComponent,
    ChampionRotationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    NgbModule
  ],
  entryComponents: [
    HeaderComponent,
    HomeComponent,
    MatchHistoryComponent
  ],
  providers: [
    SummonerService,
    MatchHistoryService,
    ChampionRotationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
