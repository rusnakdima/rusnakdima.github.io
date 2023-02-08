/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/document" />
import * as mongoose from "mongoose";
export declare const ActivitySchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type_activity: string;
}>;
export interface IActivity extends mongoose.Document {
    readonly type_activity: string;
}
export declare class ActivityDto {
    type_activity: string;
    constructor(type_activity: string);
}
