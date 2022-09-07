import { LuminariaService } from 'src/app/services/luminaria/luminaria.service';
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  public selectOption: string = '-1';
  private types: any;
  public types_title: any[] = [
    {name: 'tipo soporte', value: 1},
    {name: 'tipo luminaria', value: 2},
    {name: 'tipo lampara', value: 3}
  ];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [],
      type: 'pie',
      showInLegend: true,
      dataLabels: {
        enabled: false
      }
    }],
    title: {
      text: ''
    }
  };

  constructor(private luminariaService: LuminariaService) { }

  ngOnInit(): void {

  }

  getType(option: any) {
    console.log(option);
    let data: any[] = [];
    let field: any[] = [];
    let title: string = '';

    switch(option) {
      case "1" :
        title = 'Tipo Soporte';
        field = this.types.tipo_soporte;
      break;

      case "2" :
        title = 'Tipo Luminaria';
        field = this.types.tipo_luminaria;
      break;

      case "3" :
        title = 'Tipo Lampara';
        field = this.types.tipo_lampara;
      break;
    }

    Object.keys(field).forEach((key: any) => {
      if(key !== 'null') {
        data.push(
          {
            name: key,
            y: field[key],
            sliced: true,
            selected: true
        });
      }
    });

    this.chartOptions = {
      series: [{
        data: data,
        type: 'pie',
        showInLegend: true,
        dataLabels: {
          enabled: false
        }
      }],
      title: {
        text: `${title} N° Total de Luminarias ${this.types.total}`
      }
    };
  }

  ngAfterViewInit() : void {
    this.luminariaService.getTypes().subscribe((types: any) => {
      this.types = types;
      this.getType(1);
    });
  }

}
