//pb:1 - finding power of number
var n = 1;
while( n <= 30 ){
    var result = Math.pow(2, n);
    if(result <= 256){
    
    console.log("Powers are : " + result);
    result == 256;}
        n++;
    }

//pb:3
var head = 1;
var tail = 2;
var n = 1;

while(n <= 11){
    let toss = Math.floor(Math.random() * 2)
    if(toss == 1){
        console.log("Head");
    }else{
        console.log("Tail");
    }
    n++; 
}

//pb:4
var gambler = 100;

while(gambler <= 200 ){
    var bet = 1;
    let win = Math.floor(Math.random() * 2);
    if(win == 1 ){
        gambler = gambler + bet;
        console.log("Won bet: " + gambler)
        gambler == 100;
    }else{
        gambler = gambler - bet;
        console.log("Lost bet: " +gambler);
    }
    
    gambler++;
    
}





























    //pb:2 Finding Magic Number
    //let n = 50;
   // while(n <= n/2){

    //}
