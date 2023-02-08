/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/document" />
import * as mongoose from "mongoose";
export declare const AcademicYearSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    academic_year: string;
}>;
export interface IAcademicYear extends mongoose.Document {
    readonly academic_year: string;
}
export declare class AcademicYearDto {
    academic_year: string;
    constructor(academic_year: string);
}
