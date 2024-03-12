import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionarios';


@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private apiUrl = `${environment.ApiUrl}/funcionarios`;

  constructor( private http: HttpClient ) { }

  ListarFuncionarios(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  BuscarPorId( id : number ) : Observable<Funcionario>{
    return this.http.get<Funcionario>(`${this.apiUrl}/${id}`)
  }

  CadastrarFuncionario(funcionario: Funcionario) : Observable<Funcionario[]>{
    return this.http.post<Funcionario[]>(`${this.apiUrl}`, funcionario);
  }

  EditarFuncionario(funcionario : Funcionario) : Observable<Funcionario>{
    return this.http.put<Funcionario>(`${this.apiUrl}/${funcionario.id}`, funcionario);
  }

  ExcluirFuncionario(id : number) : Observable<Funcionario>{
    return this.http.delete<Funcionario>(`${this.apiUrl}/${id}`);


  }
  InativarFuncionario(id: number) : Observable<Funcionario[]>{
    return this.http.put<Funcionario[]>(`${this.apiUrl}/${id}/inativo`,id);

  }

  AtivarFuncionario(id: number) : Observable<Funcionario[]>{
    return this.http.put<Funcionario[]>(`${this.apiUrl}/${id}/ativo`, id );
  }

};
