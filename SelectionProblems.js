
//Switch case Problems
//pb:1

let check = Math.floor(Math.random() * 10);
switch(check) {
    case 1:
        text = "One";
        break;
    case 2:
        text = "Two";
        break;
    case 3:
        text = "Three";
        break;
    case 4:
        text = "Four";
        break;
    case 5:
        text = "Five";
        break;
    case 6:
        text = "Six";
        break;
    case 7:
        text = "Seven";
        break;
    case 8:
        text = "Eight";
        break;
    case 9:
        text = "Nine";
        break;
        default:
            text = "NA";
                    
}
console.log(check + ":" + text);
                    
//pb:2
let weekday = Math.floor(Math.random() * 6);
//switch(new Date().getDay()) {
    switch(weekday){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log(weekday + ":" + day);

//pb:3
var numbs = 10000;

    //let numbs = 10000;
    switch(numbs){
    case 1:
        num = "Ones";
        break;
    case 10:
        num = "Tens";
        break;
    case 100:
        num = "Hundreds";
        break;
    case 1000:
        num = "Thousands";
        break;
    case 10000:
        num = "Ten Thousands";
        break;
    case 100000:
        num = "Lakhs";
        break;
    
}
console.log("num: " + num);

//pb:4
    var numb = 4;
    
    switch(numb){
    case 1:
        let inches = 12;
        let noOfFeet = 2 * inches;
       console.log("2 Feet to Inches: " + noOfFeet);
        break;
    case 2:
        let inches1 = 12;
        let noOfInches = 56 / inches1;
       console.log("56 Inches to Feet: " + noOfInches);
        break;
        
    case 3:
        let metres = 3.28; //feet
        let feet1 = 4 * metres;
        console.log("4 Metres to Feet: " + feet1);
        break;
    case 4:
        let metres1 = 3.28; //feet
        let feet2 = 12 / metres1;
        console.log("12 Feet to Metres: " + feet2);
        break;
    
}

