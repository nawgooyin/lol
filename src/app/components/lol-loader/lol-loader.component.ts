import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lol-loader',
  templateUrl: './lol-loader.component.html',
  styleUrls: ['./lol-loader.component.css']
})
export class LolLoaderComponent implements OnInit {

  @Input() loading: boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

}
