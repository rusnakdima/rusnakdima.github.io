/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/document" />
import * as mongoose from "mongoose";
export declare const JournalSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    course?: number;
    semester?: number;
    year?: string;
    group?: string;
    discipline?: string;
    fio?: string;
    w1?: string;
    w2?: string;
    w3?: string;
    w4?: string;
    w5?: string;
    w6?: string;
    w7?: string;
    w8?: string;
    w9?: string;
    w10?: string;
    w11?: string;
    w12?: string;
    w13?: string;
    w14?: string;
    w15?: string;
    course_work?: string;
    r1?: string;
    r1p?: string;
    r2?: string;
    r2p?: string;
    rA?: string;
}>;
export interface IJournal extends mongoose.Document {
    readonly year: string;
    readonly course: number;
    readonly semester: number;
    readonly group: string;
    readonly discipline: string;
    readonly fio: string;
    readonly w1: string;
    readonly w2: string;
    readonly w3: string;
    readonly w4: string;
    readonly w5: string;
    readonly w6: string;
    readonly w7: string;
    readonly w8: string;
    readonly w9: string;
    readonly w10: string;
    readonly w11: string;
    readonly w12: string;
    readonly w13: string;
    readonly w14: string;
    readonly w15: string;
    readonly course_work: string;
    readonly r1: string;
    readonly r1p: string;
    readonly r2: string;
    readonly r2p: string;
    readonly rA: string;
}
export declare class JournalDto {
    year: string;
    course: number;
    semester: number;
    group: string;
    discipline: string;
    fio: string;
    w1: string;
    w2: string;
    w3: string;
    w4: string;
    w5: string;
    w6: string;
    w7: string;
    w8: string;
    w9: string;
    w10: string;
    w11: string;
    w12: string;
    w13: string;
    w14: string;
    w15: string;
    course_work: string;
    r1: string;
    r1p: string;
    r2: string;
    r2p: string;
    rA: string;
    constructor(year: string, course: number, semester: number, group: string, discipline: string, fio: string, w1: string, w2: string, w3: string, w4: string, w5: string, w6: string, w7: string, w8: string, w9: string, w10: string, w11: string, w12: string, w13: string, w14: string, w15: string, course_work: string, r1: string, r1p: string, r2: string, r2p: string, rA: string);
}
