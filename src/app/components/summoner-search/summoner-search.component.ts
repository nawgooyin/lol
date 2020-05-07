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
    {title: 'Europe', value: 'EUN1'},
    {title: 'Korea', value: 'KR'}
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
