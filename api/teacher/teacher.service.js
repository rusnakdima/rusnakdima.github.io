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
exports.TeacherService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const teacher_schema_1 = require("./teacher.schema");
let TeacherService = class TeacherService {
    constructor(teacherModel) {
        this.teacherModel = teacherModel;
    }
    async getAll() {
        return await this.teacherModel.find({}).exec();
    }
    async get(data) {
        return await this.teacherModel.findOne({ teacher: data.teacher }).exec();
    }
    async addData(data) {
        var teacherDto = new teacher_schema_1.TeacherDto(data.teacher);
        const newTeacher = await new this.teacherModel(teacherDto).save();
        return newTeacher;
    }
    async updateData(data) {
        var teacherDto = new teacher_schema_1.TeacherDto(data.teacher);
        const updateTeacher = await this.teacherModel.findByIdAndUpdate(data._id, teacherDto, { new: true });
        return updateTeacher;
    }
    async deleteData(data) {
        const deleteTeacher = await this.teacherModel.findByIdAndDelete(data.id);
        return deleteTeacher;
    }
};
TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Teachers')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TeacherService);
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map