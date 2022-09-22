//If Else Problems
// pb:1
let num1 = Math.floor(Math.random() * 1000);
let num2 = Math.floor(Math.random() * 1000);
let num3 = Math.floor(Math.random() * 1000);
let num4 = Math.floor(Math.random() * 1000);
let num5 = Math.floor(Math.random() * 1000);
array = [num1, num2, num3, num4, num5];
minValue = Math.min(...array);
maxValue = Math.max(...array);

    console.log("Numbers: " + array);
    console.log("Minimum Value: " + minValue + "   Maximum Value: "  + maxValue);
if(minValue < maxValue){
    console.log("True");
}else
console.log("False");



//pb:2
//const prompts=require("prompt-sync")();
//let day = prompts("Enter the Day : ");
//let month = prompts("Enter the Month : ");
//console.log("Date : "+day+ "\tMonth : "+month);

//if(( month >= 3 && day >= 20 && month <= 6 && day <= 20 ))
//{
    //console.log("True");
//}
//else{
    //console.log("False");
//}

//pb: 3
const year = 2004;
if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}

//pb:4
var head = 1;
var tail = 2;
var toss = Math.floor(Math.random() * 2);
if(toss == 1){
    console.log("Head")
}else
    console.log("Tail")

