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

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(teacher1);
console.log(director1);
console.log(printTeacher("Levi", "Karenda"));


