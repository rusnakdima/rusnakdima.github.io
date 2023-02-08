/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/document" />
import * as mongoose from "mongoose";
export declare const DisciplineSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    direction: string;
    name_discipline: string;
    course: string;
    semester: string;
}>;
export interface IDiscipline extends mongoose.Document {
    readonly name_discipline: string;
    readonly course: string;
    readonly semester: string;
    readonly direction: string;
}
export declare class DisciplineDto {
    name_discipline: string;
    course: string;
    semester: string;
    direction: string;
    constructor(name_discipline: string, course: string, semester: string, direction: string);
}
