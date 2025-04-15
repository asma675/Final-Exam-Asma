import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({ providedIn: 'root' })
export class AppService {
  shoppingCart: Product[] = [];

  addToCart(product: Product) {
    const existing = this.shoppingCart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.shoppingCart.push({ ...product, quantity: 1 });
    }
  }

  getSubtotal(): number {
    return this.shoppingCart.reduce((sum, p) => sum + p.price * p.quantity, 0);
  }

  getTax(): number {
    return this.getSubtotal() * 0.13;
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }
}
