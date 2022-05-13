import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../_services/basket.service';

@Component({
  selector: 'app-basket-count',
  templateUrl: './basket-count.component.html',
  styleUrls: ['../../../app.component.css'],
})
export class BasketCountComponent implements OnInit {
  public count: number;
  constructor(private basketService: BasketService) {}

  ngOnInit() {
    this.basketService.basketData.subscribe((data) => {
      this.count = data.totalCount;
    });
  }
}
