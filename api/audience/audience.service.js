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
exports.AudienceService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const audience_schema_1 = require("./audience.schema");
let AudienceService = class AudienceService {
    constructor(audienceModel) {
        this.audienceModel = audienceModel;
    }
    async getAll() {
        return await this.audienceModel.find({}).exec();
    }
    async get(data) {
        return await this.audienceModel.findOne({ num_class: data.num_class }).exec();
    }
    async addData(data) {
        var audienceDto = new audience_schema_1.AudienceDto(data.num_class);
        const newAudience = await new this.audienceModel(audienceDto).save();
        return newAudience;
    }
    async updateData(data) {
        var audienceDto = new audience_schema_1.AudienceDto(data.num_class);
        const updateAudience = await this.audienceModel.findByIdAndUpdate(data._id, audienceDto, { new: true });
        return updateAudience;
    }
    async deleteData(data) {
        const deleteAudience = await this.audienceModel.findByIdAndDelete(data.id);
        return deleteAudience;
    }
};
AudienceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Audiences')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AudienceService);
exports.AudienceService = AudienceService;
//# sourceMappingURL=audience.service.js.map