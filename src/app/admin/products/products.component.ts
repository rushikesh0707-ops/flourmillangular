import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Product } from '../../models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { AdminProductService } from '../../services/product.service';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatTableModule, MatDividerModule, MatIconModule, MatCardModule, MatFormFieldModule, FormsModule, CommonModule, HttpClientModule, MatInputModule, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  @ViewChild('formSection') formSection!: ElementRef;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  productForm: Product = { id: 0, name: '', description: '', imageUrl: '', price: 0 };
  editing: boolean = false;
  searchTerm: string = '';

  constructor(private productService: AdminProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe(res => {
      this.products = res;
      this.filteredProducts = res;
    });

  }

  save() {
    if (this.editing) {
      this.productService.update(this.productForm.id, this.productForm).subscribe(() => {
        this.resetForm();
        this.loadProducts();
      });
    } else {
      this.productService.add(this.productForm).subscribe(() => {
        this.resetForm();
        this.loadProducts();
      });
    }
  }

  edit(product: Product) {
    this.productForm = { ...product };
    this.editing = true;

    // Smooth scroll to the form
    setTimeout(() => {
      this.formSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Slight delay ensures DOM is updated

  }

  delete(id: number) {
    this.productService.delete(id).subscribe(() => this.loadProducts());
  }

  resetForm() {
    this.productForm = { id: 0, name: '', description: '', imageUrl: '', price: 0 };
    this.editing = false;
  }

  filterProducts() {
    const term = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  }
}
