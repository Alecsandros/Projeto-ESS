//Atributos

var lucroDiario = 0;
var lucroSemanal = 0;
var lucroMensal = 0;
var brutoDiario = 0;
var brutoSemanal = 0;
var brutoMensal = 0;
var indiceArray = 0;
var ArrayProduto = [];

//Metodos de CONTABILIDADE
function NovoProduto(produto){   //SetPoroduto(String) cria um novo prodoto, deve ser chamado depois que o produto é criado 
	var Produto = {produto: produto, lucroDiario: 0, lucroSemanal: 0, lucroMensal: 0, brutoDiario: 0, brutoSemanal: 0, brutoMensal: 0, pesoDiario: 0, pesoSemanal: 0, pesoMensal: 0};
	ArrayProduto[indiceArray] = Produto;
	indiceArray++;
}

function ProcurarProduto(produto){
	var codProd = produdo.getCodigo();
	for(var i = 0; i < indiceArray; i++){
		var codProdArray = ArrayProduto[i].getCodigo();
		if (codProd = codProdArray){
			return i;
		}
	}
}

//Preciso de getCodigo de Produto

function PedidoEntregue(pedido){
	var listaDeCompra = pedido.getLista();
	for(var i = 0; i < ListaDeCompra.length() ; i++){
		var itemDeCompra = ListaDeCompra[i];
		var produto = itemDeCompra.getProduto();
		var indice = ProcurarProduto(produto);
		var preco = produto.getValor();
		var quantidade = itemDeCompra.getQuantidade();
		var desconto = pedido.getDesconto();
		var bruto = preco * quantidade;
		var lucro = (bruto/100) * desconto;
		incrementarValor(lucro, bruto);
		ArrayProduto[i].incrementarPeso(quantidade);
	}
	
}

//Preciso de getLista de Pedido [Retorna Array com todos os produtos da compra]
//Preciso de getProduto de ItemDeCompra [retorna o produto]
//Preciso de getValor de Produto [Retorna o valor do produto correspondente]
//Preciso de getQuantidade de ItemDeCompra [Retorna a quantidade pedida (ou peso pedido) do pedido correspondente]
//Preciso de getDesconto de Pedido [Retorna o desconto em porcentagem aplicado no pedido todo]


function incrementarValor(lucro, bruto){ //V1
	lucroDiario +=  lucro;
	lucroSemanal += lucro;
	lucroMensal += lucro;
	brutoDiario += bruto;
	brutoSemanal += bruto;
	brutoMensal += bruto;
	ArrayProduto[indice].incrementarValor(lucro, bruto);
}

function incrementarValor(lucro, bruto){  //V2
	var ldiario = getlucroDiario() + lucro;
	var lsemanal = getlucroSemanal() + lucro;
	var lmensal = getlucroMensal() + lucro;
	var bdiario = getbrutoDiario() + bruto;
	var bsemanal = getbrutoSemanal() + bruto;
	var bmensal = getbrutoMensal() + bruto;
	setlucroDiario(ldiario);
	setlucroSemanal(lsemanal);
	setlucroMensal(lmensal);
	setbrutoDiario(bdiario);
	setbrutoSemanal(bsemanal);
	setbrutoMensal(bmensal);
	ArrayProduto[indice].incrementarValor(lucro, bruto);
}

function setlucroDiario(valor){
	this.lucroDiario = valor;
}

function setlucroSemanal(valor){
	this.lucroSemanal = valor;
}

function setlucroMensal(valor){
	this.lucroMensal = valor;
}

function setbrutoDiario(valor){
	this.brutoDiario = valor;
}

function setbrutoSemanal(valor){
	this.brutoSemanal = valor;
}

function setbrutoMensal(valor){
	this.brutoMensal = valor;
}

function getlucroDiario(){
	return this.lucroDiario;
}

function getlucroSemanal(){
	return this.lucroSemanal;
}

function getlucroMensal(){
	return this.lucroMensal;
}

function getbrutoDiario(){
	return this.brutoDiario;
}

function getbrutoSemanal(){
	return this.brutoSemanal;
}

function getbrutoMensal(){
	return this.brutoMensal;
}

//Metodos de REGISTRO PRODUTO
function incrementarPeso(peso){  //V1
	pesoDiario += peso
	pesoSemanal += peso
	pesoMensal += peso
}

function incrementarPeso(peso){ //V2
	var diario = getpesoDiario() + peso;
	var semanal = getpesoSemanal() + peso;
	var mensal = getpesoMensal() + peso;
	setpesoDiario(diario);
	setpesoSemanal(semanal);
	setpesoMensal(mensal);
}

function incrementarValor (lucro, bruto){ //V1
	lucroDiario +=  lucro;
	lucroSemanal += lucro;
	lucroMensal += lucro;
	brutoDiario += bruto;
	brutoSemanal += bruto;
	brutoMensal += bruto;
} 

function incrementarValor(lucro, bruto){  //V2
	var ldiario = getlucroDiario() + lucro;
	var lsemanal = getlucroSemanal() + lucro;
	var lmensal = getlucroMensal() + lucro;
	var bdiario = getbrutoDiario() + bruto;
	var bsemanal = getbrutoSemanal() + bruto;
	var bmensal = getbrutoMensal() + bruto;
	setlucroDiario(ldiario);
	setlucroSemanal(lsemanal);
	setlucroMensal(lmensal);
	setbrutoDiario(bdiario);
	setbrutoSemanal(bsemanal);
	setbrutoMensal(bmensal);
}

function setlucroDiario(valor){
	this.lucroDiario = valor;
}

function setlucroSemanal(valor){
	this.lucroSemanal = valor;
}

function setlucroMensal(valor){
	this.lucroMensal = valor;
}

function setbrutoDiario(valor){
	this.brutoDiario = valor;
}

function setbrutoSemanal(valor){
	this.brutoSemanal = valor;
}

function setbrutoMensal(valor){
	this.brutoMensal = valor;
}

function setpesoDiario(valor){
	this.pesoDiario = valor;
}

function setpesoSemanal(valor){
	this.pesoSemanal = valor;
}

function setpesoMensal(valor){
	this.pesoMensal = valor;
}

function getlucroDiario(){
	return this.lucroDiario;
}

function getlucroSemanal(){
	return this.lucroSemanal;
}

function getlucroMensal(){
	return this.lucroMensal;
}

function getbrutoDiario(){
	return this.brutoDiario;
}

function getbrutoSemanal(){
	return this.brutoSemanal;
}

function getbrutoMensal(){
	return this.brutoMensal;
}

function getpesoDiario(){
	return this.pesoDiarioso;
}

function getpesoSemanal(){
	return this.pesoSemanal;
}

function getpesoMensal(){
	return this.pesoMensal;
}

function ResetDiario (){  
	lucroDiario = 0;
	brutoDiario = 0;
	for(var i = 0; i < indiceArray: i++){
		ArrayProduto[i].setlucroDiario(0);
		ArrayProduto[i].setbrutoDiario(0);
		ArrayProduto[i].setpesoDiario(0);
	}
}

function ResetSemanal (){ 
	lucroSemanal = 0;
	brutoSemanal = 0;
	for(var i = 0; i < indiceArray: i++){
		ArrayProduto[i].setlucroSemanal(0);
		ArrayProduto[i].setbrutoSemanal(0);
		ArrayProduto[i].setpesoSemanal(0);
	}
}

function ResetMensal (){ 
	lucroMensal = 0;
	brutoMensal = 0;
	for(var i = 0; i < indiceArray: i++){
		ArrayProduto[i].setlucroMensal(0);
		ArrayProduto[i].setbrutoMensal(0);
		ArrayProduto[i].setpesoMensal(0);
	}
}