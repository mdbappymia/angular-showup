import { Component, Injectable, OnInit } from '@angular/core';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class CartComponent implements OnInit {
  public cart: any = [];
  constructor(private cartItem: ShopComponent) {
    console.log(cartItem.selectItems);
    this.cart = [...this.cart, ...this.cartItem.selectItems];
  }
  ngOnInit(): void {
    console.log(this.cartItem.selectItems);
  }
}
