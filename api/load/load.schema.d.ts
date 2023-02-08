/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/document" />
import * as mongoose from "mongoose";
export declare const LoadSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name_group: string;
    num_stud: number;
    academic_year: string;
    teacher: string;
    name_discipline: string;
    course: number;
    semester: number;
    total: number;
    hours_lecture?: number;
    hours_labor?: number;
    hours_practic?: number;
    hours_rk?: number;
    hours_control?: number;
    hours_course_work?: number;
    hours_consul?: number;
    hours_exam?: number;
    hours_credit?: number;
    hours_credit_asses?: number;
}>;
export interface ILoad extends mongoose.Document {
    readonly name_discipline: string;
    readonly academic_year: string;
    readonly course: number;
    readonly semester: number;
    readonly name_group: string;
    readonly num_stud: number;
    readonly teacher: string;
    readonly hours_lecture: number;
    readonly hours_labor: number;
    readonly hours_practic: number;
    readonly hours_rk: number;
    readonly hours_control: number;
    readonly hours_course_work: number;
    readonly hours_consul: number;
    readonly hours_exam: number;
    readonly hours_credit: number;
    readonly hours_credit_asses: number;
    readonly total: number;
}
export declare class LoadDto {
    name_discipline: string;
    academic_year: string;
    course: number;
    semester: number;
    name_group: string;
    num_stud: number;
    teacher: string;
    hours_lecture: number;
    hours_labor: number;
    hours_practic: number;
    hours_rk: number;
    hours_control: number;
    hours_course_work: number;
    hours_consul: number;
    hours_exam: number;
    hours_credit: number;
    hours_credit_asses: number;
    total: number;
    constructor(name_discipline: string, academic_year: string, course: number, semester: number, name_group: string, num_stud: number, teacher: string, hours_lecture: number, hours_labor: number, hours_practic: number, hours_rk: number, hours_control: number, hours_course_work: number, hours_consul: number, hours_exam: number, hours_credit: number, hours_credit_asses: number, total: number);
}
