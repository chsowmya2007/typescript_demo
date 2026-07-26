let Name: string = "Sowmya";
let Age: number = 19;
let isStudent: boolean = true;
console.log("Data type of name: "+typeof Name);
console.log("Data type of Age: "+typeof Age);
console.log("Data type of isStudent: "+typeof isStudent);

console.log(Name);
console.log(Age);
console.log(isStudent);

//Special Data Types
//1.any
let data: any = 100;
console.log("Number:", data);

data = "TypeScript";
console.log("String:", data);

data = false;
console.log("Boolean:", data);

//2.unknown
let Value: unknown=10;
console.log("Data type of Value: "+typeof Value);

Value="Hello world";
console.log("Data type of Value: "+typeof Value);

if(typeof Value==="string"){
    console.log("Length of Value:"+ Value.length);
}

Value = true;
console.log("Data type of Value: "+typeof Value);

//3.void
function Detail(message: string): void {
    console.log("Branch:"+message);
}
Detail("Aiml");
