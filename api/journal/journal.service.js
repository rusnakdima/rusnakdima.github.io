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
exports.JournalService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const journal_schema_1 = require("./journal.schema");
let JournalService = class JournalService {
    constructor(journalModel) {
        this.journalModel = journalModel;
    }
    async getAll() {
        return await this.journalModel.find({}).exec();
    }
    async addData(data) {
        var journalDto = new journal_schema_1.JournalDto(data.year, data.course, data.semester, data.group, data.discipline, data.fio, data.w1, data.w2, data.w3, data.w4, data.w5, data.w6, data.w7, data.w8, data.w9, data.w10, data.w11, data.w12, data.w13, data.w14, data.w15, data.course_work, data.r1, data.r1p, data.r2, data.r2p, data.rA);
        const newJournal = await new this.journalModel(journalDto).save();
        return newJournal;
    }
    async updateData(data) {
        var journalDto = new journal_schema_1.JournalDto(data.year, data.course, data.semester, data.group, data.discipline, data.fio, data.w1, data.w2, data.w3, data.w4, data.w5, data.w6, data.w7, data.w8, data.w9, data.w10, data.w11, data.w12, data.w13, data.w14, data.w15, data.course_work, data.r1, data.r1p, data.r2, data.r2p, data.rA);
        const updateJournal = await this.journalModel.findByIdAndUpdate(data._id, journalDto, { new: true });
        return updateJournal;
    }
    async deleteData(data) {
        const deleteJournal = await this.journalModel.findByIdAndDelete(data.id);
        return deleteJournal;
    }
};
JournalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Journals')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], JournalService);
exports.JournalService = JournalService;
//# sourceMappingURL=journal.service.js.map