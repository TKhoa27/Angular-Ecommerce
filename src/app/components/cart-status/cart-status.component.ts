import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {


  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    //subcribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => {
        this.totalPrice = data
      }
    )

    //subcribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => {
        this.totalQuantity = data
      }
    )

  }

}
