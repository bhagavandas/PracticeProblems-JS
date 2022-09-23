//pb:1 - finding power of number
var n = 10;

for( var i = 1; i <= n; i++ ){
    var result = Math.pow(i, n);
    console.log(i + " : " + result);
}

//pb:3 - checking that number is prime
console.log("..............Checking given number is prime or not.................")
var number = 5;
//const number = parseInt(prompt("Enter a number: "));
let isPrime = true;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(number + " is a prime number");
    } else {
        console.log(number + " is a not prime number");
    }
}

//pb:4
console.log("..............Listing the prime numbers in a range.................")

var numb = 10;
console.log("Prime numbers are in the range of " + numb)
for (let i = 0; i <= numb; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
       
        console.log(i);
    }
}

//pb:5 finding factorial
var n = 3;
var fact = 1;
for(var i = 1; i <= n; i++){
    fact = fact * i;
}
    console.log("Factorial of "+ n +" is: " + fact)

//pb:6 finding factors
 var num = 15;
 console.log("Prime factors of " + num + " are: ")
 for( var i = 1; i <= num; i++){
    if(num % i == 0){
        console.log(i);
    }
 }

//pb:2
let h_Num = 6;
var result  = 0;
for( var i = 1; i <= h_Num; i++){
    harmonicNum = 1/i;
    result = result + harmonicNum;
    }
    console.log(result);


