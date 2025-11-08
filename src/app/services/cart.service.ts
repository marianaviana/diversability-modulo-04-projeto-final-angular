import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem, Product } from '../models/product.model';
import * as CartActions from '../store/cart.actions';
import { selectCartItems, selectCartTotal, selectCartItemsCount, selectIsProductInCart } from '../store/cart.selectors';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private store: Store) { }

  addToCart(product: Product): void {
    this.store.dispatch(CartActions.addToCart({ product }));
  }

  removeFromCart(productId: number): void {
    this.store.dispatch(CartActions.removeFromCart({ productId }));
  }

  updateQuantity(productId: number, quantity: number): void {
    this.store.dispatch(CartActions.updateQuantity({ productId, quantity }));
  }

  clearCart(): void {
    this.store.dispatch(CartActions.clearCart());
  }

  getCartItems(): Observable<CartItem[]> {
    return this.store.select(selectCartItems);
  }

  getCartTotal(): Observable<number> {
    return this.store.select(selectCartTotal);
  }

  getCartItemsCount(): Observable<number> {
    return this.store.select(selectCartItemsCount);
  }

  isProductInCart(productId: number): Observable<boolean> {
    return this.store.select(selectIsProductInCart(productId));
  }
}
