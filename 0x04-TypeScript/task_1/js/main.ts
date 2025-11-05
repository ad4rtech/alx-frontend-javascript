interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: 'Daisy',
    fullTimeEmployee: false,
    lastName: 'Kenxi',
    location: 'Nigeria',
    contract: false,
};

console.log(teacher1);
