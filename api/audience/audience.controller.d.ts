import { Response } from 'express';
import { AudienceService } from './audience.service';
export declare class AudienceController {
    private audienceService;
    constructor(audienceService: AudienceService);
    root(): string;
    getAll(res: Response): Promise<Response<any, Record<string, any>>>;
    add(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    update(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    delete(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
}
