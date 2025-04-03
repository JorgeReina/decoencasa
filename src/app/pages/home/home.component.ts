import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Articulo, ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  articulos: Articulo[] = [];

  constructor(private articulosService: ArticuloService) {}

  ngOnInit(): void {
    this.articulosService.getArticulosHome().subscribe((data) => {
      this.articulos = data;
    });
  }
}
