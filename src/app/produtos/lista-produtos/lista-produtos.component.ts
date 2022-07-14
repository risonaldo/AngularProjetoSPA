import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html'

})
export class ListaProdutosComponent implements OnInit {

  public produtos: Produto[];
  constructor(private produtoService: ProdutoService) { 
    
  }



  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );
  }

}
