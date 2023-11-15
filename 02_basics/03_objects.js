// singleton 

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    age: 18,
    location: "India",
    email: "abc@xyz.com",
    isLoggedIn: false,
    [mySym]: "Key1",
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello JS USER");
}
jsUser.greetingTwo = function(){
    console.log(`hello JS USER ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

