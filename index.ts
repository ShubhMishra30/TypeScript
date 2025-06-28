let course: string = "TypeScript";
let age: number = 30;
let isActive: boolean = true;

//tuple
let user: [string, Number] = ["Shubham", 30];

//array
let numbers: Number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Shubham", "John", "Doe"];

//array of arrays
let arrayOfArrays: number[][] = [[1, 2], [3, 4], [5, 6]];

 

//enum
enum Role {
    ADMIN = "Admin",
    USER = "User",
    GUEST = "Guest"
}           

type students = {
    name: string;
    age: number;
    isActive: boolean;
}

let student: students = {
    name: "Shubham",
    age: 30,
    isActive: true
};
