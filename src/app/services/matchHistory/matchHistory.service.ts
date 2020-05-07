import { Injectable } from "@angular/core";
import { Resources } from 'src/app/services/resources';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatchHistory } from 'src/app/entities/matchHistory';

@Injectable()
export class MatchHistoryService {
    private _matchHistoryUrl: string = Resources.basePath + 'getSummonerMatchHistory';
    private _gameStatsUrl: string = Resources.basePath + 'getMatch';

    constructor(private http: HttpClient) { }

    getMatchHistory(summonerName: string, server: string, endIndex: number, beginIndex: number): Observable<MatchHistory> {
        return this.http.get<MatchHistory>(`${this._matchHistoryUrl}?summonerName=${summonerName}&server=${server}&endIndex=${endIndex}&beginIndex=${beginIndex}`);
    }

    getGameStats(matchId: number, server: string) {
        return this.http.get<any>(`${this._matchHistoryUrl}?matchId=${matchId}&server=${server}`);
    }
}