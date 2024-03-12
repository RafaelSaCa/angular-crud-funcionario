import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  btnAcao: string = 'Salvar';
  btnTitulo: string = 'Alteração de Cadastro';
  funcionario!: Funcionario;

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.BuscarPorId(id).subscribe((dados) => {
      this.funcionario = dados;
    });
  }

  editarFuncionario(funcionario: Funcionario) {
    this.funcionarioService
      .EditarFuncionario(funcionario)
      .subscribe((dados) => {
        this.router.navigate(['/']);
      });
  }
}
