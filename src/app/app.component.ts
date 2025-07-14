import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./admin/layout/layout.component";
import { ProductsComponent } from "./admin/products/products.component";

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'admin-panel';
}
