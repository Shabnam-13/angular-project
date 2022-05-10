import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-count',
  templateUrl: './basket-count.component.html',
  styleUrls: ['../../../app.component.css'],
})
export class BasketCountComponent implements OnInit {
  public count: number=3;
  constructor() {}

  ngOnInit() {}
}
