import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[];
  readonly baseURL = 'https://api.nowgrocery.com/api/OfferAPI/GetBestOffersOnline/10\n';

  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get(this.baseURL);
  }
}
