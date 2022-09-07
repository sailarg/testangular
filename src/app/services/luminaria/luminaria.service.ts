import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LuminariaService {

  private data : BehaviorSubject<any> = new BehaviorSubject([]);
  private luminarias : BehaviorSubject<any> = new BehaviorSubject([]);
  private types : BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() { }

  setData(data: object) :void {
    this.data.next(data);
  }

  getData(): Observable<any>{
    return this.data
  }

  setLuminarias(data: any) :void {
    this.luminarias.next(data);
    let tipo_soporte: any[] = [];
    let tipo_luminaria: any[] = [];
    let tipo_lampara: any[] = [];

    data.features.forEach( (element: any) => {

      if(tipo_soporte[element.properties.tipo_soporte] >= 0 ) {
        tipo_soporte[element.properties.tipo_soporte]++;
      }
      else {
        tipo_soporte[element.properties.tipo_soporte] = 0;
      }

      if(tipo_luminaria[element.properties.tipo_luminaria] >= 0 ) {
        tipo_luminaria[element.properties.tipo_luminaria]++;
      }
      else {
        tipo_luminaria[element.properties.tipo_luminaria] = 0;
      }

      if(tipo_lampara[element.properties.tipo_lampara] >= 0 ) {
        tipo_lampara[element.properties.tipo_lampara]++;
      }
      else {
        tipo_lampara[element.properties.tipo_lampara] = 0;
      }
    });

    this.types.next({tipo_soporte : tipo_soporte, tipo_luminaria: tipo_luminaria, tipo_lampara: tipo_lampara, total: data.features.length});
  }

  getLuminarias(): Observable<any>{
    return this.luminarias;
  }

  getTypes(): any {
        return this.types;
  }
}
