

let x = 7;

function a(y) {
  return x + y; //7+y
}

function b(z) {
  let x = 99;
  return z(5);
}

alert(b(a)); 


function a(x) {
    return (y) => x + y;
 }
 
 alert(a(2)(4)); // Ի՞նչ կցուցադրի

 




 function a(x) {
    return function(y) {
       return function(z) {
         return x + y + z;
       };
    };
 }
 
 alert(a);          // Ի՞նչ կցուցադրի
 alert(a(2));       // Ի՞նչ կցուցադրի
 alert(a(2)(4));    // Ի՞նչ կցուցադրի
 alert(a(2)(4)(9));
 