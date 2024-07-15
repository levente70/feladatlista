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

  
  //Kiválasztott elemek mozgatása
  move(hova:string){
    if ( hova == "holnapra" ){
      this.moveTomorrow.forEach(element => {
        this.todosTomorrow.push(element);
        this.todos = this.todos.filter(t => t != element);
      });
      while (this.moveTomorrow.pop()){}

    }else if ( hova == "mara" ){
      this.moveToday.forEach(element => {
        this.todos.push(element);
        this.todosTomorrow = this.todosTomorrow.filter(t => t != element);
      });
      while (this.moveToday.pop()){}

    }
  }

  //Kiválasztott elemek törlése
  delet(){
    this.moveTomorrow.forEach(element => {
      this.todos = this.todos.filter(t => t != element);
    });
    this.moveToday.forEach(element => {
      this.todosTomorrow = this.todosTomorrow.filter(t => t != element);
    });
    while (this.moveTomorrow.pop()){}
    while (this.moveToday.pop()){}
   }
  

}
