"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceDto = exports.AudienceSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.AudienceSchema = new Schema({
    num_class: {
        type: String,
        required: true,
    },
}, { timestamps: true });
class AudienceDto {
    constructor(num_class) {
        this.num_class = num_class;
    }
}
exports.AudienceDto = AudienceDto;
//# sourceMappingURL=audience.schema.js.map