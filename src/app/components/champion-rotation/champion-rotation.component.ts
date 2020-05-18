import { Component, OnInit, Input } from '@angular/core';
import { ChampionRotation } from 'src/app/entities/championRotation';

@Component({
  selector: 'champion-rotation',
  templateUrl: './champion-rotation.component.html',
  styleUrls: ['./champion-rotation.component.css']
})
export class ChampionRotationComponent implements OnInit {

  @Input() championRotation: ChampionRotation = {} as ChampionRotation;

  constructor() { }

  ngOnInit(): void {
    
  }

}
