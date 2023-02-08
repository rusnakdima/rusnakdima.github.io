"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadDto = exports.LoadSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.LoadSchema = new Schema({
    name_discipline: { type: String, required: true, },
    academic_year: { type: String, required: true, },
    course: { type: Number, required: true, },
    semester: { type: Number, required: true, },
    name_group: { type: String, required: true, },
    num_stud: { type: Number, required: true, },
    teacher: { type: String, required: true, },
    hours_lecture: { type: Number, },
    hours_labor: { type: Number, },
    hours_practic: { type: Number, },
    hours_rk: { type: Number, },
    hours_control: { type: Number, },
    hours_course_work: { type: Number, },
    hours_consul: { type: Number, },
    hours_exam: { type: Number, },
    hours_credit: { type: Number, },
    hours_credit_asses: { type: Number, },
    total: { type: Number, required: true, },
}, { timestamps: true });
class LoadDto {
    constructor(name_discipline, academic_year, course, semester, name_group, num_stud, teacher, hours_lecture, hours_labor, hours_practic, hours_rk, hours_control, hours_course_work, hours_consul, hours_exam, hours_credit, hours_credit_asses, total) {
        this.name_discipline = name_discipline;
        this.academic_year = academic_year;
        this.course = course;
        this.semester = semester;
        this.name_group = name_group;
        this.num_stud = num_stud;
        this.teacher = teacher;
        this.hours_lecture = hours_lecture;
        this.hours_labor = hours_labor;
        this.hours_practic = hours_practic;
        this.hours_rk = hours_rk;
        this.hours_control = hours_control;
        this.hours_course_work = hours_course_work;
        this.hours_consul = hours_consul;
        this.hours_exam = hours_exam;
        this.hours_credit = hours_credit;
        this.hours_credit_asses = hours_credit_asses;
        this.total = total;
    }
}
exports.LoadDto = LoadDto;
//# sourceMappingURL=load.schema.js.map