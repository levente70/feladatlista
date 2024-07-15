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

  //Kiválasztás, a segédtömbök használatával
  select(p: Todo, hova: string){
    if (hova == "holnapra"){
      if (this.moveTomorrow.find(t => t==p) == p){
        this.moveTomorrow = this.moveTomorrow.filter(t => t != p);  
      } else {
          this.moveTomorrow.push(p)
        }

    }else if (hova == "mara"){
      if (this.moveToday.find(t => t==p) == p){
        this.moveToday = this.moveToday.filter(t => t != p);        
      } else {this.moveToday.push(p)}


    }
}
  
}
