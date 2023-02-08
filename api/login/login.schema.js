"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = exports.UserSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    name_group: {
        type: String,
    },
    theme_data: {
        type: String,
    },
}, { timestamps: true });
class UserDto {
    constructor(username, password, name_group, theme_data) {
        this.username = username;
        this.password = password;
        this.name_group = name_group;
        this.theme_data = theme_data;
    }
}
exports.UserDto = UserDto;
//# sourceMappingURL=login.schema.js.map