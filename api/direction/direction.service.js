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
exports.DirectionService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const direction_schema_1 = require("./direction.schema");
let DirectionService = class DirectionService {
    constructor(directionModel) {
        this.directionModel = directionModel;
    }
    async getAll() {
        return await this.directionModel.find({}).exec();
    }
    async get(data) {
        return await this.directionModel.findOne({ direction: data.direction }).exec();
    }
    async addData(data) {
        var directionDto = new direction_schema_1.DirectionDto(data.direction);
        const newDirection = await new this.directionModel(directionDto).save();
        return newDirection;
    }
    async updateData(data) {
        var directionDto = new direction_schema_1.DirectionDto(data.direction);
        const updateDirection = await this.directionModel.findByIdAndUpdate(data._id, directionDto, { new: true });
        return updateDirection;
    }
    async deleteData(data) {
        const deleteDirection = await this.directionModel.findByIdAndDelete(data.id);
        return deleteDirection;
    }
};
DirectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Directions')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], DirectionService);
exports.DirectionService = DirectionService;
//# sourceMappingURL=direction.service.js.map