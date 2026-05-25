function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    return allowedTypes.includes(valueType);
}

const myVar1: number = 42;
const myVar2: string = "Hello";
const myVar3: boolean = true;

const allowed: string[] = ["number", "string"];

console.log(validateUnionType(myVar1, allowed)); // true
console.log(validateUnionType(myVar2, allowed)); // true
console.log(validateUnionType(myVar3, allowed)); // false