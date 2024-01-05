import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient,) { }

  baseUrl = 'https://api.escuelajs.co/api/v1/';

  getProductList(payload:any = {}) {
    return this.httpClient.get(this.baseUrl + 'products?offset='+ payload.offset + '&limit='+ payload.limit);
  }

  getProductDetails(id: number) {
    return this.httpClient.get(this.baseUrl + 'products/' + id);
  }
}
