import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  is:boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goTo(option: string) : void {
    this.is = option == 'información-elemento';
    this.router.navigateByUrl(option);
  }
}
