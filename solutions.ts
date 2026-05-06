

// ----------------------------------------------------------- 1
const filterEvenNumbers =
    (input: number[]): number[] => {
        return [...input].filter((value) => { return value % 2 === 0 })
    }



// ----------------------------------------------------------- 2
const reverseString = (input: string): string => {
    return input.split("").reverse().join("")
}


// ----------------------------------------------------------- 3
type Type_check = string | number;

const checkType = (input: Type_check): Type_check => {
    return typeof input === "string" ? "String" : "Number"
}

// ----------------------------------------------------------- 4

type user_type = {
    readonly id: number;
    name: string,
    age: number
}

const getProperty = <T, K extends keyof T> (object_input: T, key_input:K ) => {
    return object_input[key_input]
}

// ----------------------------------------------------------- 5
