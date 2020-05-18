import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/entities/servers';
import { ChampionRotation } from 'src/app/entities/championRotation';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChampionRotationService } from 'src/app/services/championRotation/champtionRotation.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  championRotation: ChampionRotation = {} as ChampionRotation;
  championRotationSub: Subscription;
  champions: any;
  loading: boolean = false;

  constructor(private championRotationService: ChampionRotationService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.getChampions();
    this.getChampionInfo();
  }

  ngOnDestroy() {
    if(!!this.championRotationSub) {
      this.championRotationSub.unsubscribe();
    }
  }

  getChampionInfo() {
    this.loading = true; 

    this.championRotationSub = this.championRotationService.getChampionRotation().subscribe(champion => {
      this.championRotation = champion;
      this.championRotation.championInfo = [];

      for(let id of this.championRotation.freeChampionIds) {
        let freeChampion = this.champions.filter(champion => id === Number(champion.key))[0];

        if(!!freeChampion.id) {
          this.championRotation.championInfo.push(freeChampion);
        }
      }

      this.loading = false;
    }, error =>{
      this.loading = false;
    });
  }

  getChampions() {
    this.http.get("assets/champions.json").subscribe(data =>{
      this.champions = data;
    });
  }

}
