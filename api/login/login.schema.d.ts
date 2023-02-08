/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/document" />
import * as mongoose from "mongoose";
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    name_group?: string;
    password?: string;
    theme_data?: string;
}>;
export interface IUser extends mongoose.Document {
    readonly username: string;
    readonly password: string;
    readonly name_group: string;
    readonly theme_data: string;
}
export declare class UserDto {
    username: string;
    password: string;
    name_group: string;
    theme_data: string;
    constructor(username: string, password: string, name_group: string, theme_data: string);
}
