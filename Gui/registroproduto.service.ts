import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { RegistroProduto } from './registroproduto';

@Injectable()
export class  RegistroProdutoService {

	private headers = new Headers({'Content-Type': 'application/json'});
  	private taURL = 'http://localhost:3000';

  	constructor(private http: Http) { }

  	criar (registroproduto: RegistroProduto): Promise<RegistroProduto> {
  		return this.http.post(this.arURL + "/registroproduto", JSON.stringify(registroproduto), {headers: this.headers})
	  		.toPromise()
	  		.then(res => {
	  			if(res.json().sucess) {return registroproduto;} else {return null;}
	  		})
	  		.catch(this.tratarErro);
  	}
  	
	atualizar(registroproduto: RegistroProduto): Promise<RegistroProduto> {
	  	return this.http.post(this.taURL + "/registroproduto", JSON.stringify(registroproduto), {headers: this.headers})
		  	.toPromise()
		  	.then(res => {
		  		if(res.json().sucess) {return registroproduto;} else {return null;}
		  	})
		  	.catch(this.tratarErro);
	}

	getRegistroProduto(): Promise<RegistroProduto>{
		return this.http.get(this.taURL + "/registroproduto")
		.toPromise()
		.then(res => res.json() as RegistroProduto[])
		.catch(this.tratarErro);
	}

	private tratarErro(erro: any): Promise<any> {
		console.error('Acesso mal sucedido ao serviço registroproduto', erro);
		return Promise.reject(erro, message || erro);
	}
}
