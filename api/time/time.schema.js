"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeDto = exports.TimeSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.TimeSchema = new Schema({
    timeStart: {
        type: String,
        required: true,
    },
    timeEnd: {
        type: String,
        required: true,
    },
}, { timestamps: true });
class TimeDto {
    constructor(timeStart, timeEnd) {
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
    }
}
exports.TimeDto = TimeDto;
//# sourceMappingURL=time.schema.js.map