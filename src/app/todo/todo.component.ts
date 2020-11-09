import { Component, OnInit } from '@angular/core';
import{Todo} from "../interfaces/todo"
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    todos:Todo[]=[
      {
        task:"kick the dog",
        completed:true,
      },
      {
        task:"make lasaga",
        completed:false,
      },
      {
        task:"hate mondays",
        completed:true,
      },
      {
        task:"be a bad kitty",
        completed:false,
      },
    ]
    todoSearchTerm = '';
  constructor() { }

  ngOnInit(): void {
  }
  addTask = (form:NgForm):void=>{
    let newTodo:Todo = {
      task:form.value.task,
      completed:false,    
    }
    this.todos.push(newTodo)
    form.reset()
  }
  todoSearch = (): Todo[] => {
    if (!this.todoSearchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        let currentTodo = todo.task.toLowerCase().trim();
        return currentTodo.includes(this.todoSearchTerm.toLowerCase().trim());
      });
    }
  };
  setTodoSearchTerm = (form: NgForm): void => {
    this.todoSearchTerm = form.value.searchTerm;
}
removeTask = (index: number): void => {
 this.todos.splice(index, 1)
};
};
