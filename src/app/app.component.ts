import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { getRandomString } from 'selenium-webdriver/safari';
import { Filme } from 'src/models/filmes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 //variáveis de inicialização de tela
 public titulo: String = 'CAMPEONATO DE FILMES';

 public subTitulo: String = 'Fase de Seleção';
 public descricao: String = 'Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir';
 public filmes$: Observable<Filme[]>;
 public cont: Number = 1;
 //public form: FormGroup;
 //construtor para auxiliar
 constructor (private data: DataService) {

    };

 ngOnInit(){
   this.filmes$ = this.data.getFilmes();
 };

 markAsSelection(select: Filme){
   select.selecao = true;
   console.log(select);
   let qtd = 1;
 };

 markAsUnSelection(select: Filme){
  select.selecao = false;
  console.log(select);
 }
 
}

