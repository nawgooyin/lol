import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/entities/servers';

@Component({
  selector: 'summoner-search',
  templateUrl: './summoner-search.component.html',
  styleUrls: ['./summoner-search.component.css']
})
export class SummonerSearchComponent implements OnInit {

  servers: Server[] = [
    {title: 'North America', value: 'NA1'},
    {title: 'Europe West', value: 'EUW1'},
    {title: 'Korea', value: 'KR'},
    {title: 'Europe Nordic & East', value: 'EUN1'},
    {title: 'Japan', value: 'JP1'},
    {title: 'Russia', value: 'RU'},
    {title: 'Brazil', value: 'BR1'},
    {title: 'Latin America', value: 'LA1'},
    {title: 'Turkey', value: 'TR1'},
    {title: 'Oceania', value: 'OC1'},
  ];
  
  summonerName: string = '';
  selectedServer: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectServer(server: string) {
    this.selectedServer = server;
  }

}
