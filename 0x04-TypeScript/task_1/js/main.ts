interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher1: Teacher = {
    firstName: 'Daisy',
    fullTimeEmployee: false,
    lastName: 'Kenxi',
    location: 'Nigeria',
    contract: false,
};

const director1: Directors = {
    firstName: 'Christopher',
    lastName: 'Magadi',
    location: 'Ethiopia',
    fullTimeEmployee: true,
    numberOfReports: 13,
};

console.log(teacher1);
console.log(director1);

