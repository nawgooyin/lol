import { Component, OnInit } from '@angular/core';
import { ChampionRotationService } from 'src/app/services/championRotation/champtionRotation.service';
import { ChampionRotation } from 'src/app/entities/championRotation';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'champion-rotation',
  templateUrl: './champion-rotation.component.html',
  styleUrls: ['./champion-rotation.component.css']
})
export class ChampionRotationComponent implements OnInit {

  championRotation: ChampionRotation = {} as ChampionRotation;
  championRotationSub: Subscription;
  champions: any;

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
    this.championRotationSub = this.championRotationService.getChampionRotation().subscribe(champion => {
      this.championRotation = champion;
      this.championRotation.championInfo = [];

      for(let id of this.championRotation.freeChampionIds) {
        let freeChampion = this.champions.filter(champion => id === Number(champion.key))[0];

        if(!!freeChampion.id) {
          this.championRotation.championInfo.push(freeChampion);
        }
      }
    });
  }

  getChampions() {
    this.http.get("assets/champions.json").subscribe(data =>{
      this.champions = data;
    });
  }

}
