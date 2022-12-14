/* 
function sum(arr) {
    let aggr = 0;
    arr.forEach(function (val) {
        aggr += val;
    });
    return aggr;
}
alert(sum([2,4,5,10]));

 let a = [9,3,4 ,10].reduce(function(aggr,val){
        return aggr + val;
 },0);
 alert(a);


 let svoystva = {
    width: 200,
    platfoorm:true
 };

 
 const red = {
    ...svoystva,
    color:"red"
 };
 
 console.log(Date());
  */

/* let arr = [5, 10, 2, "ando", "yulya"];

arr.forEach(function (hopar, mopar) {
  console.log("what a number " + hopar + "inch indexa " + mopar + "boqoncho");
});
 */

/* 
let a = [5, 6,8, 10,19];

let a2 = a.filter(function(val){
    return val < 90;
})
alert(a2);
console.log(a2); */
/* debugger;
function sum(arr) {
    let aggr = 0;
    arr.forEach(function(val,) {
        aggr += val;
    });
    return aggr;
};

console.log(sum([5,6,6])); */


/*  let a = [5, 6,7,8].reduce(function(aggr, val) {
    return aggr + val;
},0);

a.reduce((previousValue, currentValue, currentIndex, array) => {}, initialValue) */


/* let a = [
    {
        name:"ando"
    },
    {
        age: 43
    },
    {
        phone:958585
    }
];

let b = a.reduce(function(aggr,val){
    if(val.name !== undefined){
        aggr.name = val.name;
    }
    if(val.age !== undefined){
        aggr.age = val.age;
    }
    if(val.phone !== undefined) {
        aggr.phone = val.phone;
    }
    return aggr;
},{})
alert(JSON.stringify(b,undefined,5) );
alert(JSON.stringify(b,undefined,10)); */


let red = [5,9,10];

let rob = red.reduce(function(arr,val){
    arr += val;
    return arr;
},0)
alert(rob);


//factorial




