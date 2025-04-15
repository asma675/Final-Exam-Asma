import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { AppService } from '../services/app.service';
import { RestService } from '../services/rest.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: Product[] = [];

  constructor(
    private restService: RestService,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.restService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    this.appService.addToCart(product);
  }
}
