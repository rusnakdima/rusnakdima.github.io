"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleDto = exports.ScheduleSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ScheduleSchema = new Schema({
    schedule_type: {
        type: String,
        required: true,
    },
    academic_year: {
        type: String,
        required: true,
    },
    course: {
        type: Number,
        required: true,
    },
    semester: {
        type: Number,
        required: true,
    },
    parity: {
        type: String,
        required: true,
    },
    day_week: {
        type: String,
        required: true,
    },
    date: {
        type: String,
    },
    time: {
        type: String,
        required: true,
    },
    name_discipline: {
        type: String,
        required: true,
    },
    num_class: {
        type: String,
        required: true,
    },
    type_activity: {
        type: String,
        required: true,
    },
    subgroup: {
        type: String,
        required: true,
    },
    teacher: {
        type: String,
        required: true,
    },
    name_group: {
        type: String,
        required: true,
    },
}, { timestamps: true });
class ScheduleDto {
    constructor(schedule_type, academic_year, course, semester, parity, day_week, date, time, name_discipline, num_class, type_activity, subgroup, teacher, name_group) {
        this.schedule_type = schedule_type;
        this.academic_year = academic_year;
        this.course = course;
        this.semester = semester;
        this.parity = parity;
        this.day_week = day_week;
        this.date = date;
        this.time = time;
        this.name_discipline = name_discipline;
        this.num_class = num_class;
        this.type_activity = type_activity;
        this.subgroup = subgroup;
        this.teacher = teacher;
        this.name_group = name_group;
    }
}
exports.ScheduleDto = ScheduleDto;
//# sourceMappingURL=schedule.schema.js.map