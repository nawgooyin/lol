import { Component, OnInit } from '@angular/core';
import { SummonerService } from 'src/app/services/summoner/summoner.service';
import { Summoner } from 'src/app/entities/summoner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  summonerInfo: Summoner[] = [];
  summonerName: string = '';
  server: string = '';
  loading: boolean = false;

  constructor(private summonerService: SummonerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.summonerName = this.route.snapshot.paramMap.get('summonerName');
    this.server = this.route.snapshot.paramMap.get('server');

    this.getSummoner(this.summonerName, this.server);
  }

  getSummoner(summonerName: string, server: string ) {
    this.loading = true;

    this.summonerService.getSummonerInfo(summonerName, server).subscribe((summoner) => {
      this.summonerInfo = summoner;

      this.loading = false;
    }, error =>{
      this.loading = false;
    });
  }

}
