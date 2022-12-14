/* function zoo(ando) {
    console.log(ando + " " + this.nation);
};

let person = {
    name:"joe",
    age: 33,
    qaq:"zzveli"
    
    
};
 

let obj = {
    nation:"armenia",
    car:"mers",
    heigth: 145
}

person.bob = zoo;
console.log(person.bob());

const abc = "ari gnanq tun";

zoo.call(obj,abc )


//bind


function bind(func, context) {

}

 */


const a = {
    age:23,
    foo: function(arr) {
        arr.reduce(function(val) {
        alert(this.age + val);
        }.bind(this));
        
    }
}
a.foo([22]);