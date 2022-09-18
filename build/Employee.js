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
function isEmail(target, key) {
    let value = target[key];
    const setter = (currentEmail) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidted = re.test(currentEmail);
        if (isValidted)
            value = currentEmail;
        else
            console.log(`${currentEmail} is not a valid email address.`);
    };
    Object.defineProperty(target, key, { set: setter, configurable: true });
}
function maxLength(maximumLength) {
    return function (target, key) {
        let value = target[key];
        const setter = (currentEmployeeName) => {
            const isValidted = currentEmployeeName.length <= 20;
            if (isValidted)
                value = currentEmployeeName;
            else
                console.log(`${currentEmployeeName} should be within 20 characters`);
        };
        Object.defineProperty(target, key, { set: setter });
    };
}
function ageLimit(maxAgeLimit) {
    return function (target, key) {
        let descriptor = Object.getOwnPropertyDescriptor(target, key);
        let value;
        const setter = (maxAge) => {
            const isValidted = maxAge <= 120;
            if (isValidted)
                value = maxAge;
            else
                console.log(`${maxAge} is out of maximum possible age.`);
        };
        Object.defineProperty(target, key, { set: setter });
    };
}
function log(target, key) {
    console.log(key);
    /*     for (let index = 0; index < arguments.length; index++) {
            const element = index == 0 ? arguments[index].constructor.name:arguments[index];
            console.log(element);
        }
     */
    console.log(Object.getOwnPropertyNames(target)[1].valueOf());
}
class Employee {
    constructor(email, employeeName, age) {
        this.email = email;
        this.employeeName = employeeName;
        this.age = age;
    }
}
__decorate([
    log,
    isEmail,
    __metadata("design:type", String)
], Employee.prototype, "email", void 0);
__decorate([
    log,
    maxLength(20),
    __metadata("design:type", String)
], Employee.prototype, "employeeName", void 0);
__decorate([
    log,
    ageLimit(120),
    __metadata("design:type", Number)
], Employee.prototype, "age", void 0);
let firstEmployee = new Employee("22342423423", "Alfred Demalo From Canada hhhhhhhhh", 125);
