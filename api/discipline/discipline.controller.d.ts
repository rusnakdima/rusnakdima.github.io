import { Response } from 'express';
import { DisciplineService } from './discipline.service';
export declare class DisciplineController {
    private disciplineService;
    constructor(disciplineService: DisciplineService);
    root(): string;
    getAll(res: Response): Promise<Response<any, Record<string, any>>>;
    add(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    update(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    delete(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
}
