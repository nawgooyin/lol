import { Component, OnInit } from '@angular/core';
import { LeaderBoard } from 'src/app/entities/leaderBoard';
import { LeaderBoardService } from 'src/app/services/leaderBoard/leaderBoard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  private readonly queue: string = 'RANKED_SOLO_5x5';
  private readonly server: string = 'na1';

  challengerLeaderBoard: LeaderBoard = {} as LeaderBoard;
  leaderBoardSub: Subscription;

  constructor(private leaderBoardService: LeaderBoardService) { }

  ngOnInit(): void {
    this.getChallengerLeaderBoard();
  }

  ngOnDestroy() {
    if(!!this.leaderBoardSub) {
      this.leaderBoardSub.unsubscribe();
    }
  }

  getChallengerLeaderBoard() {
    this.leaderBoardSub = this.leaderBoardService.getChallengerList(this.queue, this.server).subscribe(leaders => {
      this.challengerLeaderBoard = leaders;
    })
  }

}
