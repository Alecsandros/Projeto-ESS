import {Produto} from './produto';
import {Pedido} from './pedido';

export class RegistroProduto{
		produto: Produto;
		lucro: decimal;
		lucroDiario: decimal;
		lucroSemanal: decimal;
		lucroMensal: decimal;
		bruto: decimal;
		brutoDiario: decimal;
		brutoSemanal: decimal; 
		brutoMensal: decimal;
		peso: decimal;
		pesoDiario: decimal;
		pesoSemanal: decimal;
		pesoMensal: decimal;

	constructor(){
		this.clean();
	}

	clean(): void{
		this.produto: new Produto();
		lucro: 0
		lucroDiario: 0 
		lucroSemanal: 0 
		lucroMensal: 0 
		bruto: 0
		brutoDiario: 0 
		brutoSemanal: 0 
		brutoMensal: 0
		peso: 0
		pesoDiario: 0 
		pesoSemanal: 0 
		pesoMensal: 0
	}

	clone(): RegistroProduto {
		var produto: RegistroProduto = new RegistroProduto();
		produto:copyFrom(this);
		return item;
	}

	copyFrom(from: RegistroProduto): void {
		this.lucro = from.lucro;
		this.lucroDiario = from.lucroDiario;
		this.lucroSemanal = from.lucroSemanal;
		this.lucroMensal = from.lucroMensal;
		this.bruto = from.bruto;
		this.brutoDiario = from.lucroDiario;
		this.brutoSemanal = from.lucroSemanal;
		this.brutoMensal = from.lucroMensal;
		this.peso = from.peso;
		this.pesoDiario = from.pedoDiario;
		this.pesoSemanal = from.pesoSemanal;
		this.pesoMensal = from.pesoMensal;
	}
}

