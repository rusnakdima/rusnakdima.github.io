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
exports.AcademicYearService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const academicYear_schema_1 = require("./academicYear.schema");
let AcademicYearService = class AcademicYearService {
    constructor(academicYearModel) {
        this.academicYearModel = academicYearModel;
    }
    async getAll() {
        return await this.academicYearModel.find({}).exec();
    }
    async get(data) {
        return await this.academicYearModel.findOne({ academic_year: data.academic_year }).exec();
    }
    async addData(data) {
        var academicYearDto = new academicYear_schema_1.AcademicYearDto(data.academic_year);
        const newAcademicYear = await new this.academicYearModel(academicYearDto).save();
        return newAcademicYear;
    }
    async updateData(data) {
        var academicYearDto = new academicYear_schema_1.AcademicYearDto(data.academic_year);
        const updateAcademicYear = await this.academicYearModel.findByIdAndUpdate(data._id, academicYearDto, { new: true });
        return updateAcademicYear;
    }
    async deleteData(data) {
        const deleteAcademicYear = await this.academicYearModel.findByIdAndDelete(data.id);
        return deleteAcademicYear;
    }
};
AcademicYearService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Academic_years')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AcademicYearService);
exports.AcademicYearService = AcademicYearService;
//# sourceMappingURL=academicYear.service.js.map