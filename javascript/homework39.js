/* //15. Գրեք ծրագիր, որը կհարցնի user-ից
 նրա տարիքը։ Եթե տարիքը փոքր է 10-ից, 
 ցույց տվեք “hi” տեքստով պատուհան(alert)։
  Եթե տարիքը մեծ է կամ հավասար 10, բայց փոքր
է 18-ից, ցույց տվեք “hello” տեքստով պատուհան։
Մնացած բոլոր դեպքերում ցույց տվեք “greetings”
 տեքստով պատուհան */

/* let userName = +prompt("how old are you?")

if(userName < 10) {
    alert("hi");
}else if(userName >= 10 && userName < 18) {
    alert("hello");
}else{
    alert("greetings");
} */


/* 16. Գրեք ծրագիր, որը user-ից կշարունակի 
խնդրել թիվ մուտքագրել։ Երբ user-ը մուտքագրի
“exit”, ցույց տվեք պատուհան (alert), որը կտպի
մինչև այդ գրված բոլոր թվերի գումարը և կավարտի ծրագիրը։ */

/* let result = 0;
debugger;
while(true) {
  let answer = prompt("give me your answer");

  if(answer === "exit") {
    alert("result is" +result);
    break;
  }
  let num = +answer;
  result = result + num;
}
    */
/* //17. Գրեք computeTriangleArea անունով ֆունկցիա,
 որը կվերցնի եռանկյան հիմքը և բարձրությունը և 
 կվերադարձնի եռանկյան մակերեսը։ Օրինակ computeTriangleArea(2, 9)․ 
 պետք է վերադարձի 9 որպես արդյունք։ */

/* let computeTriangleAre = function(base,height){
    return(base * height) / 2;
};
alert(computeTriangleAre(9,2)); */

/* 18. Գրեք reverse անունով ֆունկցիա, 
որը կվերցնի զանգված և կվերադարձնի մի
նոր զանգված, որի արժեքները նույնն են
ինչ առաջին զանգվածինը, բայց համակարգված
են հակառակ դասավորությամբ։ Օրինակ 
reverse([1, 2, 3, 4])․ պետք է վերադարձնի
նոր զանգված նման արժեքներով՝ [4, 3, 2, 1] */

/* let reverse = function(arr){
    let resultArr = [];
    let i1 = 0;
    let i2 = arr.length - 1;

    while(i2 >= 0) {
        resultArr[i1] = arr[i2];
        i1++;
        i2--;

    }
    return resultArr;
}
alert(reverse([1, 2, 3, 4])); */

/* 19. Գրեք average անունով ֆունկցիա, 
որը կվերցնի թվերի զանգված, և 
կվերադարձնի այդ թվերի հանրահաշվական
 միջինը։ Օրինակ average([4, 3, 6, 10, 2])․ պետք է վերադարձի 5։ */

/* let average = function(array) {
    let runningSum = 0;
    let i = 0;
    while(i < array.length){
        runningSum = runningSum + array[i];
        i++;
    }
    return runningSum / array.length;
};
alert(average([4, 3, 6, 10, 2, 10])); */

/* 20. Գրեք factorial անունով ֆունկցիա,
 որը կվերցնի թիվ և կվերադարձնի այդ թվի
  ֆակտորիալը։ Հիշեք, որ թվի ֆակտորիալը, տրված 
  թվից մինչև 1 բոլոր բնական թվերի արտադրյալն է։ 
  Օրինակ factorial(5)․ պետք է վերադարձի 120։ */

debugger;
  let factorial = function(num) {
    let result = 1;
    while(num >= 1) {
        result = result * num;
        num--;
        alert(result);
    }
    return result;
    
  }
  
  alert(factorial(5))