import { Component } from '@angular/core';
import { TransmitionService } from 'src/app/services/transmition.service';

@Component({
  selector: 'app-cart-count',
  templateUrl: './cart-count.component.html',
  styleUrls: ['./cart-count.component.css']
})
export class CartCountComponent {
  constructor(public transmitionService:TransmitionService){}
}
