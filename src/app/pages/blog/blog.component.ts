import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Articulo, ArticuloService } from '../../services/articulo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  articulos: Articulo[] = [];

  constructor(private articulosService: ArticuloService) {}

  ngOnInit(): void {
    this.articulosService.obtenerArticulos().subscribe((data) => {
      this.articulos = data;
    });
  }
}
