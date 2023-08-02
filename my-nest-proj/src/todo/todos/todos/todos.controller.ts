
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Todo } from '../../todo.schema';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosService) {}

    @Post()
    create(@Body() todo: Todo) {
        return this.todoService.create(todo);
    }

    @Get()
    findAll() {
        return this.todoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.todoService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() todo: Todo) {
        return this.todoService.update(id, todo);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.todoService.remove(id);
    }
}
