import { Injectable } from "@angular/core";
import { Resources } from 'src/app/services/resources';
import { HttpClient } from '@angular/common/http';
import { Summoner } from 'src/app/entities/summoner';
import { Observable } from 'rxjs';

@Injectable()
export class SummonerService {
    private _url: string = Resources.basePath + 'getSummonerInfo';

    constructor(private http: HttpClient) { }

    getSummonerInfo(summonerName: string, server: string): Observable<Summoner[]> {
        return this.http.get<Summoner[]>(`${this._url}?summonerName=${summonerName}&server=${server}`);
    }
}