import { Response } from 'express';
import { LoginService } from './login.service';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    root(): string;
    add(data: any, data1: any): Promise<void>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    ldapLogin(req: any, res: any): Promise<any>;
}
