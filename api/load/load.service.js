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
exports.LoadService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const load_schema_1 = require("./load.schema");
let LoadService = class LoadService {
    constructor(loadModel) {
        this.loadModel = loadModel;
    }
    async getAll() {
        return await this.loadModel.find({}).exec();
    }
    async getLoad(query) {
        if (query.year == 'other')
            return await this.loadModel.find({ name_group: query.group, course: query.course, semester: query.semester }).exec();
        else
            return await this.loadModel.find({ name_group: query.group, academic_year: query.year, course: query.course, semester: query.semester }).exec();
    }
    async addData(data) {
        var loadDto = new load_schema_1.LoadDto(data.name_discipline, data.academic_year, data.course, data.semester, data.name_group, data.num_stud, data.teacher, data.hours_lecture, data.hours_labor, data.hours_practic, data.hours_rk, data.hours_control, data.hours_course_work, data.hours_consul, data.hours_exam, data.hours_credit, data.hours_credit_asses, data.total);
        const newLoad = await new this.loadModel(loadDto).save();
        return newLoad;
    }
    async updateData(data) {
        var loadDto = new load_schema_1.LoadDto(data.name_discipline, data.academic_year, data.course, data.semester, data.name_group, data.num_stud, data.teacher, data.hours_lecture, data.hours_labor, data.hours_practic, data.hours_rk, data.hours_control, data.hours_course_work, data.hours_consul, data.hours_exam, data.hours_credit, data.hours_credit_asses, data.total);
        const updateLoad = await this.loadModel.findByIdAndUpdate(data._id, loadDto, { new: true });
        return updateLoad;
    }
    async deleteData(data) {
        const deleteLoad = await this.loadModel.findByIdAndDelete(data.id);
        return deleteLoad;
    }
};
LoadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Loads')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], LoadService);
exports.LoadService = LoadService;
//# sourceMappingURL=load.service.js.map