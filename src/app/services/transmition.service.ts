import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransmitionService {

  cartItems: any = [];
  cartCount: Number = 0;

  constructor() {
    this.checkCart();
  }

  public setCart(item: any) {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
      const existingItem = this.cartItems.find((cartItem: { id: any; }) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.cartItems.push(item);
      }
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }else{
      this.cartItems.push(item);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    }
    this.cartCount = this.cartItems.length;
  }

  checkCart(){
    const storedItems = localStorage.getItem('cartItems');
    this.cartItems = JSON.parse(storedItems || '');
    this.cartCount = this.cartItems.length;
  }

}
