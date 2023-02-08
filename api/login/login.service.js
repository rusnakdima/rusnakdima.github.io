"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const login_schema_1 = require("./login.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let LoginService = class LoginService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async login(data) {
        try {
            const user = await this.get({ "uid": data });
            const payload = {
                uid: user["username"],
                cn: user["username"],
                role: "students",
                group: user["name_group"],
                theme_data: user["theme_data"]
            };
            const token = await this.createToken(payload);
            return token;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async createToken(user) {
        const expiresIn = 60 * 60;
        const secret = 'q3tb@!jnk$^hg8*u5zv9&m6x1s2w7p4r0e3';
        const dataStoredInToken = {
            uid: user.uid,
            cn: user.cn,
            role: user.role,
            group: user.group,
            theme_data: user.theme_data
        };
        return jwt.sign(dataStoredInToken, secret, { expiresIn });
    }
    async getAll() {
        return this.userModel.find({}).exec();
    }
    async get(data) {
        return this.userModel.findOne({ username: data.uid }).exec();
    }
    async addData(data, data1) {
        data1.password = await bcrypt.hash(data1["password"], 10);
        var userDto = new login_schema_1.UserDto(data.uid, data1.password, 'noname', '{}');
        const newUser = await new this.userModel(userDto).save();
        return newUser;
    }
    async updateData(data, data1) {
        var userDto = new login_schema_1.UserDto(data.uid, data1.password, data.name_group, data.theme_data);
        const updateUser = await this.userModel.findByIdAndUpdate(data1._id, userDto, { new: true });
        return updateUser;
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Users')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map