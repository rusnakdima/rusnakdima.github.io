"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicYearDto = exports.AcademicYearSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.AcademicYearSchema = new Schema({
    academic_year: {
        type: String,
        required: true,
    },
}, { timestamps: true });
class AcademicYearDto {
    constructor(academic_year) {
        this.academic_year = academic_year;
    }
}
exports.AcademicYearDto = AcademicYearDto;
//# sourceMappingURL=academicYear.schema.js.map