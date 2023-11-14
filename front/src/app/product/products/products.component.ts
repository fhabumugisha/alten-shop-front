import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Observable} from "rxjs";
import {Product} from "../product.model";
import {SelectItem} from "primeng/api";
import { Table } from 'primeng/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: Product[];
  layout = 'list';
  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  sortKey!: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(value => this.products =  value);
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }
  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };
  onSortChange(event: any) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }


  dvFilter($event: any, dv: any) {
    dv.filter($event.target.value);

  }
}
