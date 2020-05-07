import { Component, OnInit, Input } from '@angular/core';
import { MatchHistory } from 'src/app/entities/matchHistory';

@Component({
  selector: 'match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit {

  @Input() matchHistory: MatchHistory = {} as MatchHistory;

  constructor() { }

  ngOnInit(): void {
  }

}
