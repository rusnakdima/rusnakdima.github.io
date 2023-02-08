/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/document" />
import * as mongoose from "mongoose";
export declare const ScheduleSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name_group: string;
    academic_year: string;
    num_class: string;
    type_activity: string;
    teacher: string;
    name_discipline: string;
    course: number;
    semester: number;
    schedule_type: string;
    parity: string;
    day_week: string;
    time: string;
    subgroup: string;
    date?: string;
}>;
export interface ISchedule extends mongoose.Document {
    readonly schedule_type: string;
    readonly academic_year: string;
    readonly course: number;
    readonly semester: number;
    readonly parity: string;
    readonly day_week: string;
    readonly date: string;
    readonly time: string;
    readonly name_discipline: string;
    readonly num_class: string;
    readonly type_activity: string;
    readonly subgroup: string;
    readonly teacher: string;
    readonly name_group: string;
}
export declare class ScheduleDto {
    schedule_type: string;
    academic_year: string;
    course: number;
    semester: number;
    parity: string;
    day_week: string;
    date: string;
    time: string;
    name_discipline: string;
    num_class: string;
    type_activity: string;
    subgroup: string;
    teacher: string;
    name_group: string;
    constructor(schedule_type: string, academic_year: string, course: number, semester: number, parity: string, day_week: string, date: string, time: string, name_discipline: string, num_class: string, type_activity: string, subgroup: string, teacher: string, name_group: string);
}
