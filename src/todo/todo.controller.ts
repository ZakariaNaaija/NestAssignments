import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {

    }


    @Post()
    addTodo(
        @Body() newTodo: CreateTodoDto
    ) {
        console.log(typeof newTodo);
        return this.todoService.addTodo(newTodo);
    }

    @Get()
    getTodos() {
        return this.todoService.getTodos();
    }

    @Get(':id')
    getTodoById(
        @Param('id') id
    ) {
        return this.todoService.findTodoById(id);
    }

    @Put(':id')
    updateTodo(
        @Param('id') id,
        @Body() newTodo: UpdateTodoDto
    ) {
        return this.todoService.updateTodo(id, newTodo);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id) {
        return this.todoService.deleteTodo(id);
    }

}

