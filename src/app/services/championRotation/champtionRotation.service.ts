import { Injectable } from "@angular/core";
import { Resources } from 'src/app/services/resources';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChampionRotation } from 'src/app/entities/championRotation';

@Injectable()
export class ChampionRotationService {
    private _url: string = Resources.basePath + 'getChampionRotation';

    constructor(private http: HttpClient) { }

    getChampionRotation(): Observable<ChampionRotation> {
        return this.http.get<ChampionRotation>(`${this._url}`);
    }
}