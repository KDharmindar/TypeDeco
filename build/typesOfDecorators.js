"use strict";
// 1. Class Decorator
// 2. Property Decorator
// 3. Method Decorator
// 4. Parameter Decorator
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
function samplePropertyDecorator(val) {
    return function (target, propertyKey) {
        console.log(val);
        console.log(target);
        console.log(propertyKey);
    };
}
function sampleMethodDecorator(msg, val) {
    return function (target, propertyKey, descriptor) {
        /*
        Data Descriptor
        1.value
        2.writable
        3.enumerable
        4.configurable

        Accessor Descriptor
        1.configurable
        2.enumberable
        3.get
        4.set
        */
        Object.defineProperty(target, "test", {
            value: "hello world",
            writable: true,
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(target, "test2", {
            enumerable: false,
            configurable: true,
            set: (_val) => {
                this.value = _val;
            },
            get: () => this.value
        });
        for (let prop in target) {
            console.log(prop);
        }
    };
}
function sampleParameterDecorator(val) {
    return function (target, propertyKey, parameterIndex) {
        console.log(val);
        console.log(parameterIndex);
    };
}
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
class Teacher {
    constructor(name, t) {
        this.teacherName = name;
        this._teacherSalary = t;
    }
    Teach(teachTime) {
        console.log("Teacher is teaching");
    }
    get teachSalary() {
        return this._teacherSalary;
    }
    set teachSalary(val) {
        this._teacherSalary = val;
    }
}
__decorate([
    samplePropertyDecorator("value for property"),
    __metadata("design:type", String)
], Teacher.prototype, "teacherName", void 0);
__decorate([
    sampleMethodDecorator("some value", 3),
    __param(0, sampleParameterDecorator("value for parameter")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Teacher.prototype, "Teach", null);
__decorate([
    configurable(false),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Teacher.prototype, "teachSalary", null);
let firstTeacher = new Teacher("Alfred", 50000);
firstTeacher.teachSalary = 60000;
console.log(firstTeacher.teachSalary);
