/* const label = document.querySelector("#label");
debugger;



const foo = document.querySelector("#inp");

foo.addEventListener("keyup", function(evt) {
        
    label.innerHTML = evt.target.value;
}); */


const box = document.querySelector("#muk");

box.addEventListener("mouseenter", function() {
    box.style.backgroundColor = "green";
})
box.addEventListener("mouseleave", function() {
    box.style.backgroundColor = "black";
})