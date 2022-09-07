import { Component, OnInit } from '@angular/core';
import { LuminariaService } from 'src/app/services/luminaria/luminaria.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  private feature: any;
  public luminariaData:any = [];

  constructor(private luminariaService: LuminariaService) { }

  ngOnInit(): void {
    this.luminariaService.getData().subscribe((feature: any) => {
      this.feature = feature;
      for(let idx in feature.properties){
        this.luminariaData.push({index:idx,value:feature.properties[idx]});
      }
    });
  }

  ngAfterViewInit() : void {

  }

}
