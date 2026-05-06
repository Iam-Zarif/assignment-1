


const filterEvenNumbers = (input: number[]) => {
    const result = [...input].filter((value) => { return value % 2 === 0 })

    if (result.length === 0) {
        return "No Even Number Found"
    }
    else return result
}

// -----------------------------------------------------------



const reverseString = (input: string) => {
    if (input === "") return "Empty string provided"

    else { 
        return input.split("").reverse().join("") 
    };
}


// -----------------------------------------------------------


type TypeCheck = string | number;

const checkType = (input: TypeCheck):"String" | "Number" => {
      return typeof input === "string" ? "String" : "Number"
}


// -----------------------------------------------------------

