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
exports.ScheduleService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const schedule_schema_1 = require("./schedule.schema");
let ScheduleService = class ScheduleService {
    constructor(scheduleModel) {
        this.scheduleModel = scheduleModel;
    }
    async getAll() {
        return await this.scheduleModel.find({}).exec();
    }
    async getSchedule(query) {
        if (query.year == '')
            return await this.scheduleModel.find({ name_group: query.group, course: query.course, semester: query.semester }).exec();
        else
            return await this.scheduleModel.find({ name_group: query.group, academic_year: query.year, course: query.course, semester: query.semester }).exec();
    }
    async getScheduleTime(query) {
        if (query.year == '')
            return await this.scheduleModel.find({ semester: query.semester, day_week: query.week, time: query.time, num_class: query.class }).exec();
        else
            return await this.scheduleModel.find({ academic_year: query.year, semester: query.semester, day_week: query.week, time: query.time, num_class: query.class }).exec();
    }
    async addData(data) {
        var scheduleDto = new schedule_schema_1.ScheduleDto(data.schedule_type, data.academic_year, data.course, data.semester, data.parity, data.day_week, data.date, data.time, data.name_discipline, data.num_class, data.type_activity, data.subgroup, data.teacher, data.name_group);
        const newSchedule = await new this.scheduleModel(scheduleDto).save();
        return newSchedule;
    }
    async updateData(data) {
        var scheduleDto = new schedule_schema_1.ScheduleDto(data.schedule_type, data.academic_year, data.course, data.semester, data.parity, data.day_week, data.date, data.time, data.name_discipline, data.num_class, data.type_activity, data.subgroup, data.teacher, data.name_group);
        const updateSchedule = await this.scheduleModel.findByIdAndUpdate(data._id, scheduleDto, { new: true });
        return updateSchedule;
    }
    async deleteData(data) {
        const deleteSchedule = await this.scheduleModel.findByIdAndDelete(data.id);
        return deleteSchedule;
    }
};
ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Schedules')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map