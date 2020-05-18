import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'summoner-search',
  templateUrl: './summoner-search.component.html',
  styleUrls: ['./summoner-search.component.css']
})
export class SummonerSearchComponent implements OnInit {
  
  summonerName: string = '';
  selectedServer: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectServer(server: string) {
    this.selectedServer = server;
  }

}
