import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Contabilidade } from './contabilidade';

@Injectable()
export class ContabilidadeService {

	private headers = new Headers({'Content-Type': 'application/json'});
  	private taURL = 'http://localhost:3000';

  	constructor(private http: Http) { }

	atualizar(contabilidade: Contabilidade): Promise<Contabilidade> {
	  	return this.http.post(this.taURL + "/contabilidade", JSON.stringify(contabilidade), {headers: this.headers})
	  	.toPromise()
	  	.then(res => {
	  		if(res.json().sucess) {
	  			return contabilidade;
	  		} else {
	  			return null;
	  		}
	  	}
	})

}

getContabilidade(): Promise<Contabilidade>{
	return this.http.get(this.taURL + "Contabilidade")
	.toPromise()
	.then(res => res.json() = Contabilidade)
	.catch(this.tratarErro);
}

private tratarErro(erro: any): Promise<any> {
	console.error('Acesso mal sucedido ao serviço contabilidade', erro);
	return Promise.reject(erro, message || erro);
}



