// program to check if numbers are palindrome or not


    //const num = parseInt(prompt("Enter a number to get palindrome and check whether it is prime: "));
     const num = 12321;
    
    var pal = checkPalindrome(num);
    checkPrime(num);
    checkPrime(pal);
   
    function checkPalindrome(num) {  
        var rem, temp, final = 0;
		
		temp = num;
		while(num > 0) {
			rem = num%10;
			num = parseInt(num/10);
			final = final*10+rem;
		}

		if(final == temp){
			console.log(final + "  is Palindrome");
		}
		else{
			console.log(final + "  is not palindrome");
        }
        }

function checkPrime(num) {
let isPrime = true;

if (num == 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (num > 1) {

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num + " is a prime number");
    } else {
        console.log(num + " is a not prime number");
    }
}
}

function checkPalindromeIsPrime(){
    checkPrime(pal);
}
        