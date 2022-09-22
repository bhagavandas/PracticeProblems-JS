//pb:1
let num = Math.floor(Math.random() * 10);
if(num == 1){
console.log(num + ": ONE");
}else if(num == 2){
console.log(num + ": TWO")
}else if(num == 3){
    console.log(num + ": THREE")
}else if(num == 4){
    console.log(num + ": FOUR")
}else if(num == 5){
    console.log(num + ": FIVE")
}else if(num == 6){
    console.log(num + ": SIX")
}else if(num == 7){
    console.log(num + ": SEVEN")
}else if(num == 8){
    console.log(num + ": EIGHT")
}else if(num == 9) {
    console.log(num + ": NINE")
}else
    console.log("ZERO");

//pb:2
let weekday = Math.floor(Math.random() * 6);
    if(weekday == 1){
    console.log(weekday + ": SUNDAY");
    }else if(weekday == 2){
    console.log(weekday + ": MONDAY")
    }else if(weekday == 3){
        console.log(weekday + ": TUESDAY")
    }else if(weekday == 4){
        console.log(weekday + ": WEDNESDAY")
    }else if(weekday == 5){
        console.log(weekday + ": THURSDAY")
    }else if(weekday == 6){
        console.log(weekday + ": FRIDAY")
    }else if(weekday == 7){
            console.log(weekday + ": SATURDAY")
    }else 
        console.log(weekday + ": NA");

//pb:3
var numbs = 1000;
if(numbs == 1){
    console.log(numbs + ": ONES");
    }else if(numbs == 10){
    console.log(numbs + ": TENS")
    }else if(numbs == 100){
        console.log(numbs + ": HUNDREDS")
    }else if(numbs == 1000){
        console.log(numbs + ": THOUSANDS")
    }else if(numbs == 10000){
        console.log(numbs + ": TEN THOUSANDS")
    }else if(numbs == 100000) 
        console.log(numbs + ": LAKHS");

 //pb:4
 var a = 10;
 var b = 5;
 var c = 20;
 var result1 = a + b * c;
 var result2 = a % b + c;
 var result3 = c + a / b;
 var result4 = a * b + c;
 array = [result1, result2, result3, result4];
    console.log("Resluts are: " + result1 +" " + result2 +" " +  result3 +" " + result4) ;
    minValue = Math.min(...array);
    console.log("Minimum Value: " + minValue);

   if(result1 > result2 && result1 > result3 && result1 > result4){
    console.log("Maximum Value: " + result1)
   }else if(result2 > result3 && result2 > result4 && result2 > result1 ){
    console.log("Maximum Value: " + result2)
   }else if(result3 > result4 && result3 > result1 && result3 > result2){
    console.log("Maximum Value: " + result3)
   }else if(result4 > result1 && result4 > result2 && result4 > result3){
    console.log("Maximum: " + result4)
   }else
   console.log("Minimum Value: " + result2)
    

