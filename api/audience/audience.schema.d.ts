/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/document" />
import * as mongoose from "mongoose";
export declare const AudienceSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    num_class: string;
}>;
export interface IAudience extends mongoose.Document {
    readonly num_class: string;
}
export declare class AudienceDto {
    num_class: string;
    constructor(num_class: string);
}
