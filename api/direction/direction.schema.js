"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectionDto = exports.DirectionSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.DirectionSchema = new Schema({
    direction: {
        type: String,
        required: true,
    },
}, { timestamps: true });
class DirectionDto {
    constructor(direction) {
        this.direction = direction;
    }
}
exports.DirectionDto = DirectionDto;
//# sourceMappingURL=direction.schema.js.map