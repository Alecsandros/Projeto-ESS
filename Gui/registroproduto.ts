import {Produto} from './produto';
import {Pedido} from './pedido';

export class RegistroProduto{
		produto: Produto;
		lucroDiario: decimal;
		lucroSemanal: decimal;
		lucroMensal: decimal;
		brutoDiario: decimal;
		brutoSemanal: decimal; 
		brutoMensal: decimal;
		pesoDiario: decimal;
		pesoSemanal: decimal;
		pesoMensal: decimal;

	constructor(){
		this.clean();
	}

	clean(): void{
		this.produto: new Produto();
		lucroDiario: 0 
		lucroSemanal: 0 
		lucroMensal: 0 
		brutoDiario: 0 
		brutoSemanal: 0 
		brutoMensal: 0
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
		this.lucroDiario = from.lucroDiario;
		this.lucroSemanal = from.lucroSemanal;
		this.lucroMensal = from.lucroMensal;
		this.brutoDiario = from.lucroDiario;
		this.brutoSemanal = from.lucroSemanal;
		this.brutoMensal = from.lucroMensal;
		this.pesoDiario = from.pedoDiario;
		this.pesoSemanal = from.pesoSemanal;
		this.pesoMensal = from.pesoMensal;
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

	function setpesoDiario(pesoDiario: decimal){
		this.pesoDiario = pesoDiario;
	}

	function setpesoSemanal(pesoSemanal: decimal){
		this.pesoSemanal = pesoSemanal;
	}

	function setpesoMensal(pesoMensal: decimal){
		this.pesoMensal = pesoMensal;
	}

	etlucroDiario: decimal(){
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
	
	function getpesoDiario: decimal(){
		return this.pesoDiarioso;
	}

	function getpesoSemanal: decimal(){
		return this.pesoSemanal;
	}

	function getpesoMensal: decimal(){
		return this.pesoMensal;
	}
}

