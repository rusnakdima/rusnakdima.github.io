/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/document" />
import * as mongoose from "mongoose";
export declare const TimeSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    timeStart: string;
    timeEnd: string;
}>;
export interface ITime extends mongoose.Document {
    readonly timeStart: string;
    readonly timeEnd: string;
}
export declare class TimeDto {
    timeStart: string;
    timeEnd: string;
    constructor(timeStart: string, timeEnd: string);
}
