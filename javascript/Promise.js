/* function func (x, y, ) {
    const a = x + 2;
          b = y + 2;
          c = x + y;

    return new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve(c*2)
        }, 1000)
        
    });


    
};
debugger;
const promis = func(2, 4,);
promis.then(function(result) {
    alert(result);
});*/

function lucum() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject(new Error("chi ashxatum"));
        },1000);
    });
}

const p = lucum();
 p.then(function(result) {
    alert(result) ;
 });

 //error
 p.catch