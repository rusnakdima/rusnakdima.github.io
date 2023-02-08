"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisciplineDto = exports.DisciplineSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.DisciplineSchema = new Schema({
    name_discipline: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    direction: {
        type: String,
        required: true,
    },
}, { timestamps: true });
class DisciplineDto {
    constructor(name_discipline, course, semester, direction) {
        this.name_discipline = name_discipline;
        this.course = course;
        this.semester = semester;
        this.direction = direction;
    }
}
exports.DisciplineDto = DisciplineDto;
//# sourceMappingURL=discipline.schema.js.map