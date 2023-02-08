"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityDto = exports.ActivitySchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ActivitySchema = new Schema({
    type_activity: {
        type: String,
        required: true,
    },
}, { timestamps: true });
class ActivityDto {
    constructor(type_activity) {
        this.type_activity = type_activity;
    }
}
exports.ActivityDto = ActivityDto;
//# sourceMappingURL=activity.schema.js.map