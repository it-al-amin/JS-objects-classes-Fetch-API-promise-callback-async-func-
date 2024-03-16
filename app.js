//creating objects
// A javascript object is an entity having state and behavior (properties and method).
//JS objects have a special property called prototype.

const student = {
    fullName: "Alamin",//properties
    marks: 98.5,
    printMarks: function () {//methods
        console.log("marks = ", this.marks);
    },
    showName() {
        console.log("Full name is ", this.fullName);
    }
}
const employee = {
    salary: 40000,
    calcTax() {
        console.log("Tax rate is 10%");
    }
}
//ref. of another object
student.__proto__ = employee;//set prototype in student object we can get employee object properties and methods
//if object and prototype have same method object method will be used


//JS classes
// Class is a program code template for creating objects

class MyClass {//class is blueprint of object
    constructor() {

    }
    myMethod() {

    }
}
let myObj = new MyClass();//CREATING OBJECT
// inheritance 

class parent {
    constructor() {
        this.species = "homo sapiens";
    }
    calcTax() {
        console.log("My class is parent")
    }
}
class child extends parent {
    constructor(branch) {
        super();//to invoke parent class constructor
        this.branch = branch;

    }
    calcTax() {
        console.log("My class is child");
    }
}
let obj = new child("ICT");
// super keyword is used to call the constructor of its parent class to access the parent's properties and methods

//try-catch
let a = 10, b = 10;
try {

    console.log(a + c);
}
catch (er) {
    console.log(er);
}

console.log(a + b);



//async await>>promise chains>>callback hell;
// Sync... each instruction waits for the previous instruction to complete its execution.
//Async.. allows to execute next instructions immediately and does't block the flow
function helow() {
    console.log("helow");
}
setTimeout(helow, 2000);

setTimeout(() => {
    console.log("alamin");
}, 4000);

//callbacks...is a function passed as an argument to another function

function cal(a, b, sumCallback) {
    sumCallback(a, b);
}
cal(2, 4, (a, b) => {
    console.log(a + b);
});
//1st print id 1 then 2 ;
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 1000);
}
//callback hell or nexted callback
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});


// promises....
// is used to solve callback hell 
//solution of callback hell
// it is an object in JS
// 3 state 1.pending 2.reslove/fullfilled 3.reject
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    return resolve("success");
});

//pending is result  undefined
//resolved is ,,     fulfilled
//reject is an ,,    erorr object

function getdata(dataId, getNextdata) {
    return new Promise((resolve, reject) => {
        //do work inside function
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextdata) {
                getNextdata();
            }
        }, 5000);


    });
}
// Promises
// .then() & .catch()
/* 

to fulfill promise
promise.then((res)=>{

});


// to reject promise

promise.catch((err)=>{

});

*/

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success");
        //reject("server error");
    });
}
//let promis = getPromise();
getPromise().then((res) => {
    console.log("promise fulfilled", res);
});


getPromise().catch((err) => {
    console.log("rejected", err);
});

function asyncFunc(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log("I am a promise", data);
            resolve("success");
        }, 1000);
        //reject("server error");
    });
}
console.log("Fetching Data");
//Promise chain
asyncFunc(1).then((res) => {

    return asyncFunc(2);
}).then((res) => {
    return asyncFunc(3);

}).then((res) => {

    return asyncFunc(4);

}).then((res) => {

    console.log("successfull");

});

//Async-Await returns a promise
//awit pauses the execution of its surrounding async function until the promise id settled

async function myFunc() {
    await asyncFunc(121);//1st call
    await asyncFunc(122);//2nd call....
    await asyncFunc(123);
    await asyncFunc(124);
    await asyncFunc(125);
    await asyncFunc(126);
}

//IIFE Imediately Invoked Function Expression is used to reduced unnesessary call async function

//(function)();
// But it can not be used 2nd time 
//It is used only for one time
//FOR DETAIL INFO..
//https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(async function () {
    await asyncFunc(121);//1st call
    await asyncFunc(122);//2nd call....
    await asyncFunc(123);
    await asyncFunc(124);
    await asyncFunc(125);
    await asyncFunc(126);
})();

//Fetch API
//The Fetch API provides an interface for fetching(sending/recieving)resources
//I t uses Request and Response objects.
//The fetch() method is used to fetch a resource(data);
//let promise=fetch(url,[options]) 
const url = "https://cat-fact.herokuapp.com/facts";

//AJAX is Asynchronous JS & XML//before it has been used
//JSON is JS Object Notation
//AJAJ is Asynchronous JS & JSON//..nowadays 

const factPara = document.querySelector("#fact");


const getFacts = async () => {
    //JSON format 
    let response = await fetch(url);//get request by default//readable data
    //console.log(response);//JSON format
    //to use response json format ka data 
    //json() method=>Input is JSON output is JS object
    let data = await response.json();//collection of object
    factPara.innerText = data[1].text;
    console.log(data[0]);//one object print



}
factPara.addEventListener("click",getFacts);
// Equivalent function using promise chaining
function getFacts1() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data[1].text); // Updated index to 0 since it seems you want the first fact
        })
        .catch(error => console.error("Error fetching data: ", error));
}

//HTTP verbs &&Response status code
 


