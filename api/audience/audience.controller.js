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
exports.AudienceController = void 0;
const common_1 = require("@nestjs/common");
const audience_service_1 = require("./audience.service");
let AudienceController = class AudienceController {
    constructor(audienceService) {
        this.audienceService = audienceService;
    }
    root() {
        return 'Academic Years';
    }
    async getAll(res) {
        const rez = await this.audienceService.getAll();
        return res.json({ 'audience': rez });
    }
    async add(res, req) {
        if (!req.body)
            return res.sendStatus(400);
        const rez = await this.audienceService.get(req.body);
        if (rez == null) {
            await this.audienceService.addData(req.body);
            this.getAll(res);
        }
    }
    async update(res, req) {
        if (!req.body)
            return res.sendStatus(400);
        await this.audienceService.updateData(req.body);
        this.getAll(res);
    }
    async delete(res, req) {
        if (!req.body)
            return res.sendStatus(400);
        await this.audienceService.deleteData(req.body);
        this.getAll(res);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AudienceController.prototype, "root", null);
__decorate([
    (0, common_1.Get)('getAll'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AudienceController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Request]),
    __metadata("design:returntype", Promise)
], AudienceController.prototype, "add", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Request]),
    __metadata("design:returntype", Promise)
], AudienceController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Request]),
    __metadata("design:returntype", Promise)
], AudienceController.prototype, "delete", null);
AudienceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [audience_service_1.AudienceService])
], AudienceController);
exports.AudienceController = AudienceController;
//# sourceMappingURL=audience.controller.js.map