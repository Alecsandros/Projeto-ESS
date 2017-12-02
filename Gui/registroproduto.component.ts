import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
 
import { RegistroProduto } from './registroproduto';
import { RegistroProdutoService } from './registroproduto.service';

@Component({
  selector: 'app-root',
  templateUrl: './contabilidade.component.html',
  styleUrls: ['./contabilidade.component.css']
})

export class ContabilidadeComponent implements OnInit {
	constructor(private registroprodutoService: RegistroProdutoService) {}
	registroproduto: RegistroProduto = new RegistroProduto();
	registroprodutos: RegistroProduto[] = new Array();

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

	incrementarValor(lucro: decimal, bruto: decimal, peso: decimal){ //V1
		lucroDiario +=  lucro;
		lucroSemanal += lucro;
		lucroMensal += lucro;
		brutoDiario += bruto;
		brutoSemanal += bruto;
		brutoMensal += bruto;
		pesoDiario += peso;
		pesoSemanal += peso;
		pesoMensal += peso;
		this.registroprodutoService.atualizar(this.RegistroProduto);
	}

	ngOnInit(): void {
    console.log();
    this.registroProdutoService.getRegistroProdutos();
        .then(reg => this.registroproduto = reg);
        .catch(erro => alert(erro));
  }

  onMove(): void {
  }
}

