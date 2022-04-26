import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://cdn.w600.comps.canstockphoto.com.br/receita-vetorial-desenho-chalkboard-vetor-eps_csp19789038.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://cdn.w600.comps.canstockphoto.com.br/viennese-receita-ilustra%C3%A7%C3%A3o-vetor-clip-arte_csp33117166.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
