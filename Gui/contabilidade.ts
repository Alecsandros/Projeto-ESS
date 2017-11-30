import {RegistroProduto} from './registroproduto';

export class Contabilidade{
	lucro= decimal;
	lucroDiario = decimal;
	lucroSemanal = decimal;
	lucroMensal = decimal;
	bruto= decimal;
	brutoDiario = decimal;
	brutoSemanal = decimal;
	brutoMensal = decimal;
	indiceArray = inteiro;
	ArrayProduto = produtocadastrado[];
  
	constructor(){
		this.clean();
	}

	clean(): void {
		lucro = 0;
		lucroDiario = 0;
		lucroSemanal = 0;
		lucroMensal = 0;
		bruto = 0;
		brutoDiario = 0;
		brutoSemanal = 0;
		brutoMensal = 0;
		indiceArray = 0;
		ArrayProduto = [];
	}

	clone (): Contabilidade {
		var contabilidade: Contabilidade = new Contabilidade();
		contabilidade.copyFrom(this);
		return contabilidade;
	}

	copyFrom(from: Contabilidade){
		this.lucro = from.lucro;
		this.lucroDiario = from.lucroDiario;
		this.lucroSemanal = from.lucroSemanal;
		this.lucroMensal = from.lucroMensal;
		this.bruto = from.bruto;
		this.brutoDiario = from.lucroDiario;
		this.brutoSemanal = from.lucroSemanal;
		this.brutoMensal = from.lucroMensal;
		this.copyArrayProdutoFrom(from.ArrayProduto);
	}

	copyArrayProdutoFrom(from: ProdutoCadastrado[]): void {
		this.ArrayProduto = [];
		for i in from {
			this.ArrayProduto[i] = from[i];
		}
	}
}