// function greet(name, lastname) {
//     console.log("Hello, " + name + lastname);
// }

// greet("John ", "smith");
// greet("Mary ");


// function catGreeter() {
//     console.log("hey cat")
//     console.log("ur so Portugese")
// }
// catGreeter()
// catGreeter()



// function specialGreeter(name) {
//     console.log("hey " + name + "! you have a cool attitude")
// }
// specialGreeter("joe")

/*
function adder(a, b, c, d) {
    console.log(a + b + c + d)
}

adder(3, 2, 2, 4) */

// function printerArray(mango) {
//     for (var i=0; i<mango.length; i++) {
//         console.log(mango[i]);
//     }
// }
// printerArray(["cat", "kangaroo", "spider", "racoon"])

// function adder(num1, num2) {
//     return num1 + num2;
// }

// adder(2, 4);

// var result = adder(2, 4) * 78;

// console.log(result)




// function doesExist(nums, num) {
//     for (var i=0; i<nums.length; i++) {
//         if (nums[i] === num) {
//             return true;
//         }
//     }
// return false;
// }

// doesExist([1, 3, 5, 7],1)


// Oppgave 1
// function kalk(a,b,c) {
//     let res1 = a+b+c;
//     let res2 = a-b-c;
//     let res3 = a*b*c;
//     let res4 = a/b/c;
//     return (`SUM: ${res1}, MIN: ${res2}, GANG: ${res3}, DEL:  ${res4}`);
// }

// let tall1 = Number(prompt("Enter first number"));
// let tall2 = Number(prompt("Enter second number"));
// let tall3 = Number(prompt("Enter third number"));

// console.log(kalk(tall1,tall2,tall3));


//oppgave 2
// function sammenlign(numb1, numb2) {
//     if (numb1 > numb2)  {
//         return "tall 1 er større"
//     } else if (numb1 < numb2) {
//         return "tall 2 er større"
//     } else {
//         return "Tallene er like."
//     }
// }

// let numb1 = Number(prompt("Skriv inn et tall"));
// let numb2 = Number(prompt("skriv inn et andre tall"));

// console.log(sammenlign(numb1, numb2));


//oppgave 3 
// function kalkulator(nummer1, nummer2, kalkis){
// if(kalkis =="+"){
//     answer = nummer1 + nummer2;
// }else if (kalkis =="-") {
//     answer = nummer1 - nummer2;
// }else if (kalkis =="*") {
//     answer = nummer1 * nummer2;
// }else if (kalkis =="/") {
//     answer = nummer1 / nummer2;
// }
// return answer;
// }
// let nummer1 = parseInt(prompt("skriv inn ditt første tall"));
// let kalkis = prompt("skriv +,-,* eller/");
// let nummer2 = parseInt(prompt("skriv inn ditt andre tall"));
// console.log(kalkulator(nummer1, nummer2, kalkis));

//oppgave 4


function randomCheck(a,b) {
   while (true) {
    var randomTall = Math.round(Math.random()*b)
    console.log(randomTall);
    if (randomTall>a) {
        console.log(`Tallet er ${randomTall}`);
        break;
        
    }
   }
}

console.log(randomCheck(20,30));