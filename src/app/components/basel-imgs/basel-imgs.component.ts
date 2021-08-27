import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basel-imgs',
  templateUrl: './basel-imgs.component.html',
  styleUrls: ['./basel-imgs.component.scss']
})
export class BaselImgsComponent implements OnInit {
@Input('baselImg') baselImg: string;
  constructor() { }

  ngOnInit(): void {
  }

}
