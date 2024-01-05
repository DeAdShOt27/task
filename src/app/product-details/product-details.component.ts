import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { TransmitionService } from '../services/transmition.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  queryParams: any;
  product_details: any;
  cartItems: any[] = [];

  constructor(private activeRoute: ActivatedRoute, private apiService: ApiService, private router: Router, public transmitionService:TransmitionService) {
    this.activeRoute.queryParams.subscribe((params: any) => {
      this.queryParams = params;
    });
  }

  async ngOnInit() {
    try {
      await this.apiService.getProductDetails(this.queryParams.id).subscribe((e) => {
        this.product_details = e;
        this.product_details.quantity = 1;
      });
    } catch (error: any) {
      console.log('error: ', error);
    }
  }

  addToCart(item: any) {
    this.transmitionService.setCart(item);
  }
}
