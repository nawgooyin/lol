import { Injectable } from "@angular/core";
import { Resources } from 'src/app/services/resources';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaderBoard } from 'src/app/entities/leaderBoard';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class LeaderBoardService {
    private _challengerListUrl: string = Resources.basePath + 'getChallengerList';
    private _leaderBoard: Observable<LeaderBoard>;

    constructor(private http: HttpClient) { }

    getChallengerList(queue: string, server: string): Observable<LeaderBoard> {
        if(!this._leaderBoard) {
            this._leaderBoard = this.http.get<LeaderBoard>(`${this._challengerListUrl}?queue=${queue}&server=${server}`)
            .pipe(shareReplay(1));
        }

        return this._leaderBoard;
    }
}