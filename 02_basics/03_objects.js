// singleton
// Object.create -- if we creare object by this method then this object is called as Singleton object. || means if we create an object using constructor it is a singleton object.

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh"
    "full name": "Alataf Ansari", // special case..
    [mySym]: "mykey1",
    age: 18,
    location: "Chennai",
    email: "alataf@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "alataf@chatgpt.com"

// Object.freeze(JsUser) -- when we made an object as freeze, we can't able to change it after that.
JsUser.email = "alataf@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user, it's Alataf");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
