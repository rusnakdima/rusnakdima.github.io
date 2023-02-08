import { Response } from 'express';
import { ScheduleService } from './schedule.service';
export declare class ScheduleController {
    private scheduleService;
    constructor(scheduleService: ScheduleService);
    root(): string;
    getAll(res: Response): Promise<Response<any, Record<string, any>>>;
    getSchedule(res: Response, query: any): Promise<Response<any, Record<string, any>>>;
    getScheduleTime(res: Response, query: any): Promise<Response<any, Record<string, any>>>;
    add(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    update(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    delete(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
}
