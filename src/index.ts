// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// } //인터페이스는 TS에서만 사용 가능.

// const person = {
//     name: "sang",
//     age: 25,
//     gender: "male",
// };

class Human{
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age:number, gender:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
} //react, node 등을 사용하면 class를 쓰게됨. 

const lynn = new Human("Lynn", 18, "female");


const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(lynn));

export { }; 