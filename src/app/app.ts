
import { Component } from '@angular/core';

type Categoria = 'espetos' | 'acompanhamentos' | 'porcoes' | 'bebidas';

interface Prato {
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  categoria: Categoria;
  etiqueta: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  categoriaSelecionada: Categoria | 'todos' = 'todos';

  categorias = [
    { id: 'todos', nome: 'Todos' },
    { id: 'espetos', nome: 'Espetos' },
    { id: 'acompanhamentos', nome: 'Acompanhamentos' },
    { id: 'porcoes', nome: 'Porções' },
    { id: 'bebidas', nome: 'Bebidas' }
  ];

  pratos: Prato[] = [
    {
      nome: 'Espetinho de Alcatra',
      preco: 18,
      descricao: 'Corte macio, temperado e preparado na brasa.',
      imagem: '/img/alcatra.jpg',
      categoria: 'espetos',
      etiqueta: 'Da casa'
    },
    {
      nome: 'Espetinho de Frango',
      preco: 14,
      descricao: 'Frango selecionado e temperado especialmente.',
      imagem: '/img/frango.jpg',
      categoria: 'espetos',
      etiqueta: 'Clássico'
    },
    {
      nome: 'Espetinho de Alho',
      preco: 12,
      descricao: 'Uma opção saborosa para acompanhar sua refeição.',
      imagem: '/img/alho.jpg',
      categoria: 'espetos',
      etiqueta: 'Especial'
    },
    {
      nome: 'Batata Frita',
      preco: 22,
      descricao: 'Batatas crocantes por fora e macias por dentro.',
      imagem: '/img/batata.jpg',
      categoria: 'acompanhamentos',
      etiqueta: 'Queridinho'
    },
    {
      nome: 'Porção de Espetinhos',
      preco: 36,
      descricao: 'Uma seleção especial de espetinhos.',
      imagem: '/img/porcao.jpg',
      categoria: 'porcoes',
      etiqueta: 'Para dividir'
    },
    {
      nome: 'Refrigerante',
      preco: 7,
      descricao: 'Bebida gelada para acompanhar.',
      imagem: '/img/refrigerante.jpg',
      categoria: 'bebidas',
      etiqueta: 'Geladinho'
    }
  ];

  get pratosFiltrados(): Prato[] {
    if (this.categoriaSelecionada === 'todos') {
      return this.pratos;
    }

    return this.pratos.filter(
      prato => prato.categoria === this.categoriaSelecionada
    );
  }

  selecionarCategoria(categoria: string) {
    this.categoriaSelecionada = categoria as Categoria | 'todos';
  }

  contar(categoria: string): number {
    if (categoria === 'todos') {
      return this.pratos.length;
    }

    return this.pratos.filter(
      prato => prato.categoria === categoria
    ).length;
  }
}
