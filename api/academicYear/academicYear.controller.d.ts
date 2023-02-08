import { Response } from 'express';
import { AcademicYearService } from './academicYear.service';
export declare class AcademicYearController {
    private academicYearService;
    constructor(academicYearService: AcademicYearService);
    root(): string;
    getAll(res: Response): Promise<Response<any, Record<string, any>>>;
    add(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    update(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    delete(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
}
