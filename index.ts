const obj1: {
    name:string,
    lastName: string,
    age?:number
} = {
    name:"vzgo",
    lastName: "petrosyan",
}

const obj2= {
    email: "ex@mail.ru",
    age: 25
}

const obj3 = {
   ...obj1,
   age:obj2.age
}

obj1.age = obj2.age 

console.log(obj1)