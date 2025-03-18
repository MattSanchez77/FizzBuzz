// for(n = 1; n <= 100; n++){

//     if (n % 3 === 0 && n % 5 === 0){
//         console.log('FizzBuzz');
//      } else if(n % 3 ===0){
//         console.log('Fizz')        
//     } else if (n % 5 ===0){
//         console.log('Buzz');
//     } 
//     else {
//         console.log(n);
//     }
//  }

let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let cell1 = ``;
let cell2 = ``;
let cell3 = ``;
let cell4 = ``;
let commas = 0;

for (let n = 0; n < str.length; n++) {
    if (str[n] === ",") {
        console.log("Found a comma")
        commas++
    } else if (str[n] === "\n") {
        console.log(cell1, cell2, cell3, cell4);
        commas = 0
        cell1 = ``;
        cell2 = ``;
        cell3 = ``;
        cell4 = ``;
    } else if (commas == 0) {
        cell1 += str[n];
    } else if (commas == 1) {
        cell2 += str[n];
    } else if (commas == 2) {
        cell3 += str[n];
    } else if (commas == 3) {
        cell4 += str[n];
    }

    if (n === str.length - 1) {
        console.log(cell1, cell2, cell3, cell4);
    }
}
