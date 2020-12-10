import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './models/todo.model';

@Injectable()
export class TodoService {
    private todos : Todo[] = [];

    constructor() {
        this.todos = [
            new Todo(),
            new Todo()
        ];
    }
    getTodos(): Todo[] {
        return this.todos;
    }

    findTodoById(id : string){
        const todo = this.todos.find(
            (actualTodo)=> actualTodo.id ===id
        );
        if(todo)
            return todo;
        throw new NotFoundException('TODO NOT FOUND');

    }

    addTodo(newTodo : CreateTodoDto) {
        const {name, description } = newTodo;
        const todo = new Todo();
        todo.name = name;
        todo.description = description;
        this.todos.push(todo);
        return todo;
    }

    deleteTodo(id: string ){
        const todo = this.findTodoById(id);
        this.todos.splice(this.todos.indexOf(todo),1);
        return this.todos;
    }

    updateTodo(id: string, newTodo: UpdateTodoDto){
        const {name, description, statut} = newTodo;
        const todo= this.findTodoById(id);
        todo.name = name? name : todo.name;
        todo.description = description? description : todo.description;
        todo.statut = statut? statut : todo.statut;
        return this.todos;
    }
}
