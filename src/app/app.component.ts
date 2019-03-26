import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Recipe of the Day';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipeList: Recipe[] = [
    new Recipe('Chicken Noodle Soup', ['chicken', 'noodle', 'soup'], ['lorem', 'ipsum']),
    new Recipe('Spaghetti', ['noodle', 'sauce'], ['lorem', 'ipsum']),
    new Recipe('Hamburger', ['buns', 'patty'], ['lorem', 'ipsum'])
  ];
  randomRecipe: Recipe = showRandom(this.recipeList);

  function showRandom(item) {
    const len = item.length;
    let randomIndex = Math.floor(Math.random() * len);
    return item[randomIndex].title;
  };

}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string[]) {}
}

// let app = new AppComponent
// console.log(app.todaysRecipeTitle)
