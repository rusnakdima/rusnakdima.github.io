"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JournalDto = exports.JournalSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.JournalSchema = new Schema({
    year: { type: String, },
    course: { type: Number, },
    semester: { type: Number, },
    group: { type: String, },
    discipline: { type: String, },
    fio: { type: String, },
    w1: { type: String, },
    w2: { type: String, },
    w3: { type: String, },
    w4: { type: String, },
    w5: { type: String, },
    w6: { type: String, },
    w7: { type: String, },
    w8: { type: String, },
    w9: { type: String, },
    w10: { type: String, },
    w11: { type: String, },
    w12: { type: String, },
    w13: { type: String, },
    w14: { type: String, },
    w15: { type: String, },
    course_work: { type: String, },
    r1: { type: String, },
    r1p: { type: String, },
    r2: { type: String, },
    r2p: { type: String, },
    rA: { type: String, },
}, { timestamps: true });
class JournalDto {
    constructor(year, course, semester, group, discipline, fio, w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, course_work, r1, r1p, r2, r2p, rA) {
        this.year = year;
        this.course = course;
        this.semester = semester;
        this.group = group;
        this.discipline = discipline;
        this.fio = fio;
        this.w1 = w1;
        this.w2 = w2;
        this.w3 = w3;
        this.w4 = w4;
        this.w5 = w5;
        this.w6 = w6;
        this.w7 = w7;
        this.w8 = w8;
        this.w9 = w9;
        this.w10 = w10;
        this.w11 = w11;
        this.w12 = w12;
        this.w13 = w13;
        this.w14 = w14;
        this.w15 = w15;
        this.course_work = course_work;
        this.r1 = r1;
        this.r1p = r1p;
        this.r2 = r2;
        this.r2p = r2p;
        this.rA = rA;
    }
}
exports.JournalDto = JournalDto;
//# sourceMappingURL=journal.schema.js.map