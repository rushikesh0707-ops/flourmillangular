import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { ProductService } from '../../../services/product.service';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../models/product.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-dialog',
  imports: [MatFormFieldModule,MatDialogModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.scss'
})
export class ProductDialogComponent {
  productForm: FormGroup;
  isEditMode: boolean;

  constructor(
    private fb: FormBuilder,
    // private productService: ProductService,
    private dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'add' | 'edit'; product?: Product }
  ) {
    this.isEditMode = data.mode === 'edit';

    this.productForm = this.fb.group({
      name: [data.product?.name || '', Validators.required],
      description: [data.product?.description || '', Validators.required],
      price: [data.product?.price || 0, [Validators.required, Validators.min(1)]],
      imageUrl: [data.product?.imageUrl || '', Validators.required]
    });
  }

  // onSave() {
  //   if (this.productForm.invalid) return;

  //   const formValue = this.productForm.value;

  //   if (this.isEditMode && this.data.product?.id) {
  //     this.productService.update(this.data.product.id, formValue).subscribe(() => {
  //       this.dialogRef.close(true);
  //     });
  //   } else {
  //     this.productService.add(formValue).subscribe(() => {
  //       this.dialogRef.close(true);
  //     });
  //   }
  // }

  onCancel() {
    this.dialogRef.close(false);
  }
}
