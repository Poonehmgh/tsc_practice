import { Injectable } from '@nestjs/common';
import {Todo} from "../../todo.schema";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
    constructor(@InjectModel(Todo.name) private readonly todoModel: Model<Todo>) {}

    async create(todo: Todo): Promise<Todo> {
        const createdTodo = new this.todoModel(todo);
        return createdTodo.save();
    }

    async findAll(): Promise<Todo[]> {
        return this.todoModel.find().exec();
    }

    async findOne(id: string): Promise<Todo | null> {
        return this.todoModel.findById(id).exec();
    }

    async update(id: string, todo: Todo): Promise<Todo | null> {
        return this.todoModel.findByIdAndUpdate(id, todo, { new: true }).exec();
    }

    async remove(id: string): Promise<Todo | null> {
        return this.todoModel.findByIdAndRemove(id).exec();
    }
}
