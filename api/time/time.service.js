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
exports.TimeService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const time_schema_1 = require("./time.schema");
let TimeService = class TimeService {
    constructor(timeModel) {
        this.timeModel = timeModel;
    }
    async getAll() {
        return await this.timeModel.find({}).exec();
    }
    async get(data) {
        return await this.timeModel.findOne({ timeStart: data.timeStart, timeEnd: data.timeEnd }).exec();
    }
    async addData(data) {
        var timeDto = new time_schema_1.TimeDto(data.timeStart, data.timeEnd);
        const newTime = await new this.timeModel(timeDto).save();
        return newTime;
    }
    async updateData(data) {
        var timeDto = new time_schema_1.TimeDto(data.timeStart, data.timeEnd);
        const updateTime = await this.timeModel.findByIdAndUpdate(data._id, timeDto, { new: true });
        return updateTime;
    }
    async deleteData(data) {
        const deleteTime = await this.timeModel.findByIdAndDelete(data.id);
        return deleteTime;
    }
};
TimeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Times')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TimeService);
exports.TimeService = TimeService;
//# sourceMappingURL=time.service.js.map