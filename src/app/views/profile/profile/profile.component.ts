import { Component, OnInit } from '@angular/core';
import { SummonerService } from 'src/app/services/summoner/summoner.service';
import { Summoner } from 'src/app/entities/summoner';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  summonerInfo: Summoner[] = [];
  summonerName: string = '';
  server: string = '';
  loading: boolean = false;
  summonerSub: Subscription;

  constructor(private summonerService: SummonerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.summonerName = this.route.snapshot.paramMap.get('summonerName');
    this.server = this.route.snapshot.paramMap.get('server');

    this.getSummoner(this.summonerName, this.server);
  }

  ngOnDestroy() {
    if(!!this.summonerSub) {
      this.summonerSub.unsubscribe();
    }
  }

  getSummoner(summonerName: string, server: string ) {
    this.loading = true;

    this.summonerSub = this.summonerService.getSummonerInfo(summonerName, server).subscribe((summoner) => {
      this.summonerInfo = summoner;

      this.summonerInfo = this.summonerInfo.map(summoner => {
        summoner.rankUrl = `//opgg-static.akamaized.net/images/medals/${summoner.tier}_${this.mapNumber(summoner.rank)}.png?image=q_auto&amp;v=1`;
        
        return summoner;
      });

      this.loading = false;
    }, error =>{
      this.loading = false;
    });
  }

  mapNumber(rank: string): string {
    if(rank === 'IV')
      return '4';
    else if(rank === 'III') 
      return '3';
    else if (rank === 'II')
      return '2';
    else 
     return '1';
  }

}
