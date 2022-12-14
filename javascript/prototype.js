/* const a = {
    name: "joe"
};

const b = {
    lastName:"jackson"
};

const c = {
    age:19,
    showAge:function(){
        alert(this.age);
    }
} */

/* a. __proto__ = b; вот так не правильно

b. __proto__ = c;

a.showAge(); */



/* const b ={
    lastName: "jackson"
};


const a = Object.create(b); */
/* 
a.name = "joe";
alert(Object.keys(a)) */

/* const b = {
    lastName:"jackson"
};

function A(){
    this.name = "joe"
}

A.prototype = b;
const a = new A; */


//classical inheritance

/* class Animal {
    constructor(qotot) {
        this.name=qotot;
    }
    
};

class Dog extends Animal {
    
    talk() {
        alert(this.name + "woof")
    }
}

class Cat extends Animal {
    talk() {
        alert(this.name + "mew")
    }
}

const dog1 = new Dog("pickles");
const cat1 = new Cat("bombom");

alert(dog1.toString());
alert(cat1.toString());
 */


/* class Person {
    sayHi() {
        alert("hi");
    }

    sayBt() {
        alert("bye");
    }
};


const obj = new Person() */;
/* alert(obj.sayHi()); */

let list = [
    "joe",
    "rob",
    "mike",
    "liza",
    "zara"
];

let searchText = "";
const input = document.querySelector("input");
input.addEventListener(keyup, (el) =>{
    searchText = el.target.value;
    render();
});

const root = document.querySelector("#root");
function render (){
    root.innerHTML = "";
    list.filter((name) =>{
        return name.indexOf(searchText) !== -1;

    }).map((name) =>{
        const div = document.createElement("div");
        div.innerHTML = name;
        return div;
    }).forEach((el) => {
        root.appendChild(el);
    });
}
render();


