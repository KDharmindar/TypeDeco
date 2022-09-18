function sampleDecorator(constructor:Function) {
    console.log("Student class is getting executed.");
}

/*function samplePropertyDecorator(target:object, propertyKey:string) :void {
    console.log("student name property accessed");
}

function sampleMethodDecorator(target:object, propertyKey:string, descriptor:PropertyDescriptor) {
    console.log("Study method is executed");
}

function sampleParameterDecorator(target:object, propertyKey:string, parameterIndex:number) {
    console.log("parameter is executed.");
}*/

@sampleDecorator
class Student {
   
    public studenName:string;
    constructor(s:string) {
        this.studenName = s;
        console.log("Object is created");
    }

   
    study(studyTime:number) {
        console.log("Student is studying");
    }
}

let student = new Student("Dharmindar");
student.study(2);