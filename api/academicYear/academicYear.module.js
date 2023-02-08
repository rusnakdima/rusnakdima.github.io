"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicYearModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const academicYear_controller_1 = require("./academicYear.controller");
const academicYear_service_1 = require("./academicYear.service");
const academicYear_schema_1 = require("./academicYear.schema");
let AcademicYearModule = class AcademicYearModule {
};
AcademicYearModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Academic_years',
                    schema: academicYear_schema_1.AcademicYearSchema
                }
            ])
        ],
        controllers: [academicYear_controller_1.AcademicYearController],
        providers: [academicYear_service_1.AcademicYearService],
    })
], AcademicYearModule);
exports.AcademicYearModule = AcademicYearModule;
//# sourceMappingURL=academicYear.module.js.map