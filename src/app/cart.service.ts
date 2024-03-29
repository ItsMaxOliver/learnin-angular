import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart = product => this.items.push(product);

  getItems = () => this.items;

  clearCart = () => this.items = [];

  getShippingPrices = () => this.http.get('/assets/shipping.json');

}