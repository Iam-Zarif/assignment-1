

// ------ 1
const filterEvenNumbers =
    (input: number[]): number[] => {
        return [...input].filter((value) => { return value % 2 === 0 })
    }



// ------ 2
const reverseString = (input: string): string => {
    return input.split("").reverse().join("")
}



// ------ 3
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): "String" | "Number" => {
    return typeof input === "string" ? "String" : "Number"
}


// ------ 4
type user_type = {
    readonly id: number;
    name: string,
    age: number
}

const getProperty = <T, K extends keyof T> (object_input: T, key_input:K ): T[K] => {
    return object_input[key_input]
}



// ------ 5
interface Book {
    title : string,
    author: string,
    publishedYear: number
} 

const toggleReadStatus =(object_input:Book): Book & {isRead:boolean} =>{
return {
    ...object_input,
    isRead:true
}
}



// ------ 6
class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name,
        this.age = age
    }
}

class Student extends Person {
   grade:string;

   constructor(name: string, age: number, grade: string) {
    super(name, age); 
    this.grade = grade;

  }
    getDetails(){
   return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}



// ------ 7
const getIntersection =(arr1:number[],arr2:number[]): number[] =>{
   const set_arr2 = new Set(arr2);

   return arr1.filter((num) =>set_arr2.has(num))
}
