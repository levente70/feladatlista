import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   //Tömbök a mai és holnapi feladatoknak
   todos: Todo[] = [];
   todosTomorrow: Todo[] = [];
   //segéd tömbök a kiválasztásokhoz
   moveTomorrow: Todo[] = [];
   moveToday: Todo[] = [];
   //aktuális változó operáláshoz
   actual: Todo = new Todo();
   //segédváltozó
   when: string = "ma";
 

   

  //Task létrehozása és mentése a megfelelő helyre
  create(p: Todo){
    let n = new Todo();
    n.name = p.name;
    if (this.when == "ma") {this.todos.push(n);}
    else if (this.when == "holnap") {this.todosTomorrow.push(n);}
  }


  
}
