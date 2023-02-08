"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const ldap_strategy_1 = require("./ldap.strategy");
const login_controller_1 = require("./login.controller");
const login_service_1 = require("./login.service");
const login_schema_1 = require("./login.schema");
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'ldap' }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Users',
                    schema: login_schema_1.UserSchema
                }
            ])
        ],
        controllers: [login_controller_1.LoginController],
        providers: [login_service_1.LoginService, ldap_strategy_1.LdapStrategy],
        exports: [
            passport_1.PassportModule.register({ defaultStrategy: 'ldap' }),
        ],
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map