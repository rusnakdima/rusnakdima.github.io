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
exports.DisciplineService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const discipline_schema_1 = require("./discipline.schema");
let DisciplineService = class DisciplineService {
    constructor(disciplineModel) {
        this.disciplineModel = disciplineModel;
    }
    async getAll() {
        return await this.disciplineModel.find({}).exec();
    }
    async get(data) {
        return await this.disciplineModel.findOne({ name_discipline: data.name_discipline }).exec();
    }
    async addData(data) {
        var disciplineDto = new discipline_schema_1.DisciplineDto(data.name_discipline, data.course, data.semester, data.direction);
        const newDiscipline = await new this.disciplineModel(disciplineDto).save();
        return newDiscipline;
    }
    async updateData(data) {
        var disciplineDto = new discipline_schema_1.DisciplineDto(data.name_discipline, data.course, data.semester, data.direction);
        const updateDiscipline = await this.disciplineModel.findByIdAndUpdate(data._id, disciplineDto, { new: true });
        return updateDiscipline;
    }
    async deleteData(data) {
        const deleteDiscipline = await this.disciplineModel.findByIdAndDelete(data.id);
        return deleteDiscipline;
    }
};
DisciplineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Disciplines')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], DisciplineService);
exports.DisciplineService = DisciplineService;
//# sourceMappingURL=discipline.service.js.map