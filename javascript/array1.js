/* let a = ["david", "hakob", "mher", "goncho", "vagr"];

let i = 0;
    i2 = a.length - 1;

    debugger;
    alert(a);
    while(i < a.length / 2){
        let d = a[i];
        a[i] = a[i2];
        a[i2] = d;
        i++;
        i2--;
        
    }
    alert(a); */


/* 
    let x = [5, 8, 11,13, 45, 66, 88, 7];

    let y =[];
    let i = 0;
    while(i < x.length){

        y[i] = x[i] * 2;
        i++;
        alert(y);
    }
 */


   /*  let x = [10, 5, 68, 19, 23, 45, 22];
        y = [];
        i = 0;
        i2 = 0;
debugger;
        while(i < x.length) {
            if(x[i] % 2 ===0) {
               y[i2] = x[i];
               i2++;
            }
            i++;
        }
        alert(y); */
    
let point = function(x) {
    return x % 2 ===0;
}

alert(point(11));