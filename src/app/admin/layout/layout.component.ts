import { Component } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule, MatNavList } from '@angular/material/list';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from "../../app.component";
import { ProductsComponent } from '../products/products.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  standalone : true,
  imports: [MatSidenavModule, MatToolbarModule,MatListModule, HttpClientModule, RouterModule,MatIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
