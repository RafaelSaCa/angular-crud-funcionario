import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit{

  funcionario? : Funcionario;
  id! : number;

  constructor( private funcionarioService : FuncionarioService,
                      private route : ActivatedRoute,
                      private router : Router

    ) {


  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.BuscarPorId(this.id).subscribe((dados) =>{
    dados.dataCriacao = new Date(dados.dataCriacao!).toLocaleDateString('pt-BR');
    dados.dataAlteracao = new Date(dados.dataAlteracao!).toLocaleDateString('pt-BR');

    this.funcionario = dados;

    })
  }
  InativaFuncionario(){
    this.funcionarioService.InativarFuncionario(this.id).subscribe((dados) =>{
     this.router.navigate(['']);
    })
  }

  AtivaFuncionario(){
    this.funcionarioService.AtivarFuncionario(this.id).subscribe((dados) =>{
      this.router.navigate(['']);
    })
  }


}
