import { Component, HostListener } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
    if (scrollTop + windowHeight === scrollHeight) {  
      console.log('End of window scroll reached');
      this.payload.offset += 10;
      this.getProductList();
    }
  }

  product_list: any = [];
  searchText: string = '';
  payload:any = {
    offset:0,
    limit:10
  }
  loader:Boolean = false;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.loader = true;
    this.getProductList();
  }

  async getProductList() {
    try {
      this.apiService.getProductList(this.payload).subscribe((e:any) => {
        this.product_list = [...this.product_list, ...e];
        if(this.loader) { this.loader = false; }
      });
    } catch (error) {
      console.log('error: ', error);
    }
  }

  goToDetails(id: number) {
    this.router.navigate(['/product-details'], { queryParams: { id: id } });
  }
}
