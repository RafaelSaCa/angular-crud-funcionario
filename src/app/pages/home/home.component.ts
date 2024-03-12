import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/components/excluir/excluir.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  funcionarios : Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];
  //campos das tabela html
  colunas = ['Situacao', 'Nome', 'Sobrenome','Departamento',  'Acoes', 'Excluir']

  constructor( private funcionarioService: FuncionarioService,
                      public dialog: MatDialog

    ){}

    ngOnInit(): void {
      this.funcionarioService.ListarFuncionarios().subscribe( resposta =>{
        const dados = resposta;

        dados.map((item) => {
          item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-BR')
          item.dataAlteracao = new Date(item.dataAlteracao!).toLocaleDateString('pt-BR')

        })
        this.funcionarios = resposta;
        this.funcionariosGeral = resposta;

        console.log(resposta);
      });



    }

    buscar(event: Event){
      const target = event.target as HTMLInputElement;
      const value = target.value;

      this.funcionarios = this.funcionariosGeral.filter(funcionario =>{
        return funcionario.nome.includes(value);
      })
    }

    openDialog(id: number){
      this.dialog.open( ExcluirComponent,{
        width: '450px',
        height:'300px',
        data:{
          id: id
        }

      });
    }
}
