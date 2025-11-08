import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyPipe]
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  isInCart$!: Observable<boolean>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.isInCart$ = this.cartService.isProductInCart(this.product.id);
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }

  removeFromCart(): void {
    this.cartService.removeFromCart(this.product.id);
  }
}
