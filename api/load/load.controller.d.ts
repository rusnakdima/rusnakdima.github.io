import { Response } from 'express';
import { LoadService } from './load.service';
export declare class LoadController {
    private loadService;
    constructor(loadService: LoadService);
    root(): string;
    getAll(res: Response): Promise<Response<any, Record<string, any>>>;
    getLoad(res: Response, query: any): Promise<Response<any, Record<string, any>>>;
    add(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    update(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    delete(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
}
