import { Response } from 'express';
import { JournalService } from './journal.service';
export declare class JournalController {
    private journalService;
    constructor(journalService: JournalService);
    root(): string;
    getAll(res: Response): Promise<Response<any, Record<string, any>>>;
    add(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    update(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    delete(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
}
