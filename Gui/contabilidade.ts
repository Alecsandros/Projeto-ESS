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

  	setlucroDiario(lucroDiario: decimal){
	this.lucroDiario = lucroDiario;
	}

	setlucroSemanal(lucroSemanal: decimal){
		this.lucroSemanal = lucroSemanal;
	}

	setlucroMensal(lucroMensal: decimal){
		this.lucroMensal = lucroMensal;
	}

	etbrutoDiario(brutoDiario: decimal){
		this.brutoDiario = brutoDiario;
	}

	setbrutoSemanal(brutoSemanal: decimal){
		this.brutoSemanal = brutoSemanal;
	}

	setbrutoMensal(brutoMensal: decimal){
		this.brutoMensal = brutoMensal;
	}

	getlucroDiario: decimal(){
		return this.lucroDiario;
	}

	getlucroSemanal: decimal(){
		return this.lucroSemanal;
	}

	getlucroMensal: decimal(){
		return this.lucroMensal;
	}

	getbrutoDiario: decimal(){
		return this.brutoDiario;
	}

	getbrutoSemanal: decimal(){
		return this.brutoSemanal;
	}

	getbrutoMensal: decimal(){
		return this.brutoMensal;
	}

}