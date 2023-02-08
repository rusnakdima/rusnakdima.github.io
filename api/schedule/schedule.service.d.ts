/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from "mongoose";
import { ISchedule } from "./schedule.schema";
export declare class ScheduleService {
    private readonly scheduleModel;
    constructor(scheduleModel: Model<ISchedule>);
    getAll(): Promise<(ISchedule & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getSchedule(query: any): Promise<(ISchedule & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getScheduleTime(query: any): Promise<(ISchedule & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    addData(data: any): Promise<ISchedule & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateData(data: any): Promise<ISchedule & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteData(data: any): Promise<ISchedule & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
