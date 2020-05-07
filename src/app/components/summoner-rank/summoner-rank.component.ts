import { Component, OnInit, Input } from '@angular/core';
import { Summoner } from 'src/app/entities/summoner';

@Component({
  selector: 'summoner-rank',
  templateUrl: './summoner-rank.component.html',
  styleUrls: ['./summoner-rank.component.css']
})
export class SummonerRankComponent implements OnInit {

  @Input() summonerInfo: Summoner[] = [];
  @Input() summonerName: string = '';
  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
}
