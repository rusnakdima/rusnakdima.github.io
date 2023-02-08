"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherDto = exports.TeacherSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.TeacherSchema = new Schema({
    teacher: {
        type: String,
        required: true,
    },
}, { timestamps: true });
class TeacherDto {
    constructor(teacher) {
        this.teacher = teacher;
    }
}
exports.TeacherDto = TeacherDto;
//# sourceMappingURL=teacher.schema.js.map