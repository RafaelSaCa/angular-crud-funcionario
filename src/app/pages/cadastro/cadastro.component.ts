import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnAcao = "Salvar"
  btnTitulo = "Cadastro de Funcionário"
  constructor( private funcionarioService : FuncionarioService,
                       private router : Router
    ) {

  }

  cadastrarFuncionario(funcionario : Funcionario ){
    this.funcionarioService.CadastrarFuncionario(funcionario).subscribe((dados) =>{
   this.router.navigate(['/'])
    })
  }
}
