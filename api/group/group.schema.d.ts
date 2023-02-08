/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/document" />
import * as mongoose from "mongoose";
export declare const GroupSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name_group: string;
    num_stud: number;
    direction: string;
}>;
export interface IGroup extends mongoose.Document {
    readonly name_group: string;
    readonly num_stud: number;
    readonly direction: string;
}
export declare class GroupDto {
    name_group: string;
    num_stud: number;
    direction: string;
    constructor(name_group: string, num_stud: number, direction: string);
}
