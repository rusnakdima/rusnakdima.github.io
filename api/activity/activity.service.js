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
exports.ActivityService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const activity_schema_1 = require("./activity.schema");
let ActivityService = class ActivityService {
    constructor(activityModel) {
        this.activityModel = activityModel;
    }
    async getAll() {
        return await this.activityModel.find({}).exec();
    }
    async get(data) {
        return await this.activityModel.findOne({ type_activity: data.type_activity }).exec();
    }
    async addData(data) {
        var activityDto = new activity_schema_1.ActivityDto(data.type_activity);
        const newActivity = await new this.activityModel(activityDto).save();
        return newActivity;
    }
    async updateData(data) {
        var activityDto = new activity_schema_1.ActivityDto(data.type_activity);
        const updateActivity = await this.activityModel.findByIdAndUpdate(data._id, activityDto, { new: true });
        return updateActivity;
    }
    async deleteData(data) {
        const deleteActivity = await this.activityModel.findByIdAndDelete(data.id);
        return deleteActivity;
    }
};
ActivityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Activities')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ActivityService);
exports.ActivityService = ActivityService;
//# sourceMappingURL=activity.service.js.map