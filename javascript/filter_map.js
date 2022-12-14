/* function transform (arr){
    return arr.filter(function(obj){
        return obj.gender === "female";
    }).map(function(obj){
        return {
            Firstname: obj.fn,
            Lastname:obj.ln,
            phone:obj.ph,
            gender:obj.gender
        };
    })
};

alert((JSON.stringify(transform( [
    {fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
    {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
    {fn: "Jane", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
    {fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
 ]),undefined, 5))); */

 
/*  function gndik(arr,hairColor) {
    let filteredArray = arr.filter(function(obj) {
        return obj.hairColor === hairColor;
    });
    let totalAge = filteredArray.reduce(function(aggr, obj){
        return aggr + obj.age
    },0)
      return totalAge / filteredArray.length;
 };
  

 alert(gndik([
    {name: "Joe", age: 13, hairColor: "red"}, 
    {name: "Mike", age: 10, hairColor: "brown"}, 
    {name: "Jane", age: 4, hairColor: "red"}, 
    {name: "Susan", age: 30, hairColor: "brown"}
], 'brown')); */
/* debugger;
function getPersonWithMostFriendsByName(people, friendName) {
    let filteredPeople = people.map((function(personObj){
        return {
            name: personObj.name,
            count: personObj.friends.filter(function(friendObj) {
                return friendObj.name === friendName; 
            }).length
        }
    }))
    const max =  filteredPeople.reduce(function(aggr,obj) {
        if(aggr === undefined){
            return obj;
        }
        if(obj.count > aggr.count){
            return obj;
        }
        return aggr;
    },undefined)
    return max.name;
};

alert(getPersonWithMostFriendsByName([
    {
     name: "Joe", 
     friends: [
   {name: "Susan", age: 12}, 
   {name: "Jane", age: 43}, 
   {name: "Susan", age: 33}
      ]
       }, 
    {
     name: "Liz", 
     friends: [
   {name: "Mila", age: 12}, 
   {name: "Susan", age: 43}, 
   {name: "Jane", age: 33}
      ]
       },
   {
     name: "Mike", 
     friends: [
   {name: "Susan", age: 12}, 
   {name: "Susan", age: 43}, 
   {name: "Susan", age: 33}
      ]
       }
   ], "Susan"));  */

 

   /* function find(arr, searchText) {
    return arr.filter(function(obj) {
      const values = Object.values(obj);
      for(let i = 0; i < values.length; i++) {
        const valueTxt = ""+values[i];
        if(valueTxt.search(searchText) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  
  alert(JSON.stringify(find([
    { name: "Apple", color: "red" },
    { name: "Banana", color: "my favorite color is yellow" },
    { name: "Orange", color: "orange" },
    { name: "Apple", color: "yellow" }
  ], "yellow"))); */

/* debugger;
  function magic(obj) {
    return Object.keys(obj).reduce(function(aggr, key) {
      aggr[obj[key]] = key;
      return aggr;
    }, {});
  }
  
  alert(JSON.stringify(magic({
    firstName: "Michael",
    lastName: "Jackson"
  }), undefined, 2)); */




 
/* debugger;
function alertFreq(str) {
    const freqMap = str.split("").reduce(function(aggr, val) {
        if(aggr[val] === undefined) {
         	aggr[val] = 1;   
        } else {
            aggr[val]++;
        }
        return aggr;
    }, {});
    
    Object.keys(freqMap).forEach(function(key) {
        alert(`${key} : ${freqMap[key]}`);
    });
}

alertFreq("hello-world"); */

/* debugger;
function max(arr) {
    return Math.max(...arr);  // Math.max(5, 28, 99, 23, 100, 32);
  }
  
  alert(max([5, 28, 99, 23, 100, 32])); */

/* 
  function factorial(num) {
    if(num<=1){
        return 1;
    }
    return num * factorial(num-1);
}
alert(factorial(5)); */


debugger;
function forEach(arr, func) {
  
    function loop(i) {
      if(i >= arr.length) {
        return;
      }
      func(arr[i], i);
      loop(i + 1);
    }
    loop(0);
  }
  
  forEach([5, 4, 3], function(val, i) {
    alert(val + " at index " + i);
  });