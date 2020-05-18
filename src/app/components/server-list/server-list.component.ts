import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Server } from 'src/app/entities/servers';

@Component({
  selector: 'server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

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

  @Output() onSubmitServer: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectServer(server: string) {
    this.onSubmitServer.emit(server);
  }

}
