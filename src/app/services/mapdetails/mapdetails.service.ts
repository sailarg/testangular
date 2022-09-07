import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MapdetailsService {
  private data : BehaviorSubject<any> = new BehaviorSubject([]);
  constructor() { }

  getData() : any {
    return this.data;
  }
  setData(data: any) : void {

    return this.data.next(data);
  }
  updateData(data : any)
  {
    let cartCount = 0;
    let cartTotal = 0;

    if(data==null)
    {
      data=[];

    }

    this.setData(data);

  }
}
