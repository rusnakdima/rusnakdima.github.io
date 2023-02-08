"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupDto = exports.GroupSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.GroupSchema = new Schema({
    name_group: {
        type: String,
        required: true,
    },
    num_stud: {
        type: Number,
        required: true,
    },
    direction: {
        type: String,
        required: true,
    },
}, { timestamps: true });
class GroupDto {
    constructor(name_group, num_stud, direction) {
        this.name_group = name_group;
        this.num_stud = num_stud;
        this.direction = direction;
    }
}
exports.GroupDto = GroupDto;
//# sourceMappingURL=group.schema.js.map