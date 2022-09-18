// 1. Class Decorator
// 2. Property Decorator
// 3. Method Decorator
// 4. Parameter Decorator

function samplePropertyDecorator(val:string) {
    return function (target:object, propertyKey:string) {
        console.log(val);
        console.log(target);
        console.log(propertyKey);
        
    }
}


function sampleMethodDecorator(msg:string, val:number) {
    return function (target:object, propertyKey:string, descriptor:PropertyDescriptor) {
        
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
            value:"hello world",
            writable:true,
            enumerable:true,
            configurable:true
        });


        Object.defineProperty(target, "test2", {
            enumerable:false,
            configurable:true,
            set:(_val) => {
                this.value = _val;
            },
            get: () => this.value
        });

        for(let prop in target) {
            console.log(prop);
        }
        
    }
}



function sampleParameterDecorator(val:string) {
    return function (target:object, propertyKey:string, parameterIndex:number) {
        console.log(val);
        console.log(parameterIndex);
    }
}


function configurable(value:boolean) {
    return function (target:object, propertyKey:string, descriptor:PropertyDescriptor) {
        descriptor.configurable = value;
    }
}

class Teacher {
    @samplePropertyDecorator("value for property")
    public teacherName:string;
    private _teacherSalary:number;

    constructor(name:string, t:number) {
        this.teacherName = name;
        this._teacherSalary = t;
    }

    @sampleMethodDecorator("some value", 3)
    Teach(@sampleParameterDecorator("value for parameter") teachTime:number) {
        console.log("Teacher is teaching");
    }

    @configurable(false)
    get teachSalary() {
        return this._teacherSalary;
    }

    set teachSalary(val:number) {
        this._teacherSalary = val;
    }
}


let firstTeacher = new Teacher("Alfred", 50000);

firstTeacher.teachSalary = 60000;
console.log(firstTeacher.teachSalary);