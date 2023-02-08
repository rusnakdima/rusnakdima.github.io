"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
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
const routes = [
    { path: 'api/group', module: group_module_1.GroupModule },
    { path: 'api/academicYear', module: academicYear_module_1.AcademicYearModule },
    { path: 'api/audience', module: audience_module_1.AudienceModule },
    { path: 'api/direction', module: direction_module_1.DirectionModule },
    { path: 'api/activity', module: activity_module_1.ActivityModule },
    { path: 'api/time', module: time_module_1.TimeModule },
    { path: 'api/teacher', module: teacher_module_1.TeacherModule },
    { path: 'api/discipline', module: discipline_module_1.DisciplineModule },
    { path: 'api/load', module: load_module_1.LoadModule },
    { path: 'api/schedule', module: schedule_module_1.ScheduleModule },
    { path: 'api/journal', module: journal_module_1.JournalModule },
    { path: 'api/login', module: login_module_1.LoginModule },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            core_1.RouterModule.register(routes)
        ],
        exports: [core_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map