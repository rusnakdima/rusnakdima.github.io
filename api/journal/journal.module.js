"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JournalModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const journal_controller_1 = require("./journal.controller");
const journal_service_1 = require("./journal.service");
const journal_schema_1 = require("./journal.schema");
let JournalModule = class JournalModule {
};
JournalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Journals',
                    schema: journal_schema_1.JournalSchema
                }
            ])
        ],
        controllers: [journal_controller_1.JournalController],
        providers: [journal_service_1.JournalService],
    })
], JournalModule);
exports.JournalModule = JournalModule;
//# sourceMappingURL=journal.module.js.map