import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
 
import { Contabilidade } from './contabilidade';
import { ContabilidadeService } from './contabilidade.service';

@Component({
  selector: 'app-root',
  templateUrl: './contabilidade.component.html',
  styleUrls: ['./contabilidade.component.css']
})

export class ContabilidadeComponent implements OnInit {
	constructor(private contabilidadeService: ContabilidadeService) {}

	contabilidadePedido(pedido: Pedido){
		var listaDeCompra = pedido.Lista;
		for (let i of listaDeCompra){
			var itemDeCompra = listaDeCompra[i];
			var produto = itemDeCompra.getProduto();
			var indice = ProcurarProduto(produto);
			var preco = produto.Valor;
			var quantidade = itemDeCompra.Quantidade;
			var desconto = pedido.Desconto;
			var bruto = preco * quantidade;
			var lucro = (bruto/100) * desconto;
			incrementarValor(lucro, bruto);
			ArrayProduto[indice].incrementarValor(lucro, bruto, quantidade);
		}
	}
	
	diario(): void {
		this.lucro = this.lucroDiario;
		this.bruto = this.brutoDiario;
  	}

  	semanal(): void {
		this.lucro = this.lucroSemanal;
		this.bruto = this.brutoSemanal;
  	}

  	mensal(): void {
		this.lucro = this.lucroMensal;
		this.bruto = this.brutoMensal;
  	}

	incrementarValor(lucro: decimal, bruto: decimal){ //V1
		lucroDiario +=  lucro;
		lucroSemanal += lucro;
		lucroMensal += lucro;
		brutoDiario += bruto;
		brutoSemanal += bruto;
		brutoMensal += bruto;
		this.contabilidadeService.atualizar(this.contabilidade);
	}

	ngOnInit(): void {
 +    console.log();
 +    this.contabilidadeService.getContabilidade();
 +        .then(cont => this.contabilidade = cont);
 +        .catch(erro => alert(erro));
 +  }

 +  onMove(): void {
 +  }
}

