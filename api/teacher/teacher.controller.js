"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
const teacher_service_1 = require("./teacher.service");
let TeacherController = class TeacherController {
    constructor(teacherService) {
        this.teacherService = teacherService;
    }
    root() {
        return 'Teachers';
    }
    async getAll(res) {
        const rez = await this.teacherService.getAll();
        return res.json({ 'teacher': rez });
    }
    async add(res, req) {
        if (!req.body)
            return res.sendStatus(400);
        const rez = await this.teacherService.get(req.body);
        if (rez == null) {
            await this.teacherService.addData(req.body);
            this.getAll(res);
        }
    }
    async update(res, req) {
        if (!req.body)
            return res.sendStatus(400);
        await this.teacherService.updateData(req.body);
        this.getAll(res);
    }
    async delete(res, req) {
        if (!req.body)
            return res.sendStatus(400);
        await this.teacherService.deleteData(req.body);
        this.getAll(res);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], TeacherController.prototype, "root", null);
__decorate([
    (0, common_1.Get)('getAll'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Request]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "add", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Request]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Request]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "delete", null);
TeacherController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService])
], TeacherController);
exports.TeacherController = TeacherController;
//# sourceMappingURL=teacher.controller.js.map