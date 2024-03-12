import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  dadosRecebidos : any;
  funcionario!: Funcionario

  constructor( private funcionarioService : FuncionarioService,
                      private router : Router,
                      @Inject(MAT_DIALOG_DATA) public data: any,
                      private ref: MatDialogRef<ExcluirComponent>

  ) {}

  ngOnInit(): void {
      this.dadosRecebidos = this.data;
      this.funcionarioService.BuscarPorId(this.dadosRecebidos.id).subscribe((dados) =>{
        this.funcionario = dados;
      });
  }

  excluir(){
    this.funcionarioService.ExcluirFuncionario(this.dadosRecebidos.id).subscribe((data)=>{
    this.ref.close();
    window.location.reload();
    });

  }
  cancelar(){
    this.ref.close();
  }
}
