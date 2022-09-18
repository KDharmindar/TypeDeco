function isEmail(target:any, key:string) {
    let value = <string>target[key];

    const setter = (currentEmail:string) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidted = re.test(currentEmail);

        if(isValidted)
            value = currentEmail;
        else
            console.log(`${currentEmail} is not a valid email address.`);
    }

    Object.defineProperty(target,key, {set:setter, configurable:true});
}


function maxLength(maximumLength:number) {
    return function(target:any, key:string) {
        let value = <string>target[key];

        const setter = (currentEmployeeName:string) => {
            const isValidted = currentEmployeeName.length <= 20;

            if(isValidted)
                value = currentEmployeeName;
            else
                console.log(`${currentEmployeeName} should be within 20 characters`);
        }

        Object.defineProperty(target, key, {set:setter});
    }
}


function ageLimit(maxAgeLimit:number) {
    return function(target:any, key:string) {
        let descriptor = Object.getOwnPropertyDescriptor(target,key);
        let value:number;

        const setter = (maxAge:number) => {
            const isValidted = maxAge <= 120;

            if(isValidted) 
                value = maxAge;
            else   
                console.log(`${maxAge} is out of maximum possible age.`);
        }

        Object.defineProperty(target, key, {set:setter});
    }
}


function log(target:any, key:string) {
    console.log(key);
/*     for (let index = 0; index < arguments.length; index++) {
        const element = index == 0 ? arguments[index].constructor.name:arguments[index];
        console.log(element);
    }
 */
    console.log(Object.getOwnPropertyNames(target)[1].valueOf());
}


class Employee {
    @log
    @isEmail
    email:string;

    @log
    @maxLength(20)
    employeeName:string;

    @log
    @ageLimit(120)
    age:number;


    constructor(email:string, employeeName:string, age:number) {
        this.email = email;
        this.employeeName = employeeName;
        this.age = age;
    }
}

let firstEmployee = new Employee("22342423423","Alfred Demalo From Canada hhhhhhhhh",125);

    





