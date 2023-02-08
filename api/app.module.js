"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_routing_module_1 = require("./app-routing.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const group_module_1 = require("./group/group.module");
const academicYear_module_1 = require("./academicYear/academicYear.module");
const audience_module_1 = require("./audience/audience.module");
const direction_module_1 = require("./direction/direction.module");
const activity_module_1 = require("./activity/activity.module");
const time_module_1 = require("./time/time.module");
const teacher_module_1 = require("./teacher/teacher.module");
const discipline_module_1 = require("./discipline/discipline.module");
const load_module_1 = require("./load/load.module");
const schedule_module_1 = require("./schedule/schedule.module");
const journal_module_1 = require("./journal/journal.module");
const login_module_1 = require("./login/login.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://Dmitriy303:dmitriy303369@cluster0.nnrtw4y.mongodb.net/Schedule_DB'),
            group_module_1.GroupModule,
            academicYear_module_1.AcademicYearModule,
            audience_module_1.AudienceModule,
            direction_module_1.DirectionModule,
            activity_module_1.ActivityModule,
            time_module_1.TimeModule,
            teacher_module_1.TeacherModule,
            discipline_module_1.DisciplineModule,
            load_module_1.LoadModule,
            schedule_module_1.ScheduleModule,
            app_routing_module_1.AppRoutingModule,
            journal_module_1.JournalModule,
            login_module_1.LoginModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map