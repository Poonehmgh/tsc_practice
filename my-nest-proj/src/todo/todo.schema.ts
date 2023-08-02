
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";


@Schema()
export class Todo extends Document {
    @Prop({required: true})
    title: string;

    @Prop({default: Date.now })
    createdAt: Date;

    @Prop({default: false})
    done: boolean;
}

export const TodoSchema  = SchemaFactory.createForClass((Todo));