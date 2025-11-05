interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working"
    }

    displayName(): string {
        return this.firstName
    }
}


function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

const teacher1: Teacher = {
    firstName: 'Daisy',
    fullTimeEmployee: false,
    lastName: 'Kenxi',
    location: 'Nigeria',
    contract: false,
};

const director1: Director = {
    firstName: 'Christopher',
    lastName: 'Magadi',
    location: 'Ethiopia',
    fullTimeEmployee: true,
    numberOfReports: 13,
};

const student1 = new StudentClass("William", "Obado")

console.log(teacher1);
console.log(director1);
console.log(printTeacher({ firstName: "Levi", lastName: "Karenda" }));

