import { Component, OnInit } from '@angular/core';
import { SummonerService } from 'src/app/services/summoner/summoner.service';
import { Summoner } from 'src/app/entities/summoner';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatchHistoryService } from 'src/app/services/matchHistory/matchHistory.service';
import { MatchHistory } from 'src/app/entities/matchHistory';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  summonerInfo: Summoner[] = [];
  matchHistory: MatchHistory = {} as MatchHistory;
  champions: any;
  summonerName: string = '';
  server: string = '';
  loading: boolean = false;
  beginIndex: number = 0;
  endIndex: number = 10;
  summonerSub: Subscription;
  matchHistorySub: Subscription;

  constructor(private summonerService: SummonerService,
              private matchHistoryService: MatchHistoryService,
              private http: HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.summonerName = this.route.snapshot.paramMap.get('summonerName');
    this.server = this.route.snapshot.paramMap.get('server');
    this.getSummoner(this.summonerName, this.server);
    this.getMatchHistory(this.summonerName, this.server, this.endIndex, this.beginIndex);

    this.getChampions();
  }

  ngOnDestroy() {
    if(!!this.summonerSub) {
      this.summonerSub.unsubscribe();
    }
    if(!!this.matchHistorySub) {
      this.matchHistorySub.unsubscribe();
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

  getMatchHistory(summonerName: string, server: string, endIndex: number, beginIndex: number) {
    this.matchHistorySub = this.matchHistoryService.getMatchHistory(summonerName, server, endIndex, beginIndex).subscribe(match => {
      this.matchHistory.matches = match.matches;

      this.matchHistory.matches = this.matchHistory.matches.map(match => {
        match.championPictureUrl = this.champions.filter(champion => match.champion === Number(champion.key))[0].icon;

        return match;
      });
    });
  }

  getChampions() {
    this.http.get("assets/champions.json").subscribe(data =>{
      this.champions = data;
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
