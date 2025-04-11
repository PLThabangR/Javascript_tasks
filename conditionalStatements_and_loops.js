//Temperature checks
let temperature =0;

if(temperature<0){
console.log("It's freezing")
}else if (temperature >=0 && temperature <=15) {
    console.log("It's cold")
} else if(temperature >=16 && temperature<=25){
    console.log("It's mild")
}else {
    console.log("It's warm")
}

//Using Switch statements
switch(true){
    case temperature <0:
    console.log("It's freezing")
    break;

    case temperature >=0 && temperature<=15:
    console.log("It's cold")
    break;

    case temperature=>16 && temperature<=25:
    console.log("It's mild")
    break;

    case temperature>=25:
    console.log("It's warm")
    break;

}


//Divisibilty check
let a=42
 if( a%2==0 && a%3==0){
    console.log("Divisible by both")
 }else if(a%2==0){
    console.log("Divisible by 2")
 }else if(a%3==0){
    console.log("Divisible by 3")
 }else{
    console.log("Not divisible by 2 or 3")
 }

 switch(true){
    case  a%2==0 && a%3==0:
        console.log("Divisible by both")
        break
    case a%2==0:
        console.log("Divisible by 2")
        break
    case a%3==0:
            console.log("Divisible by 3")
            break
       default :
       console.log("Not divisible by 2 or 3")
        }


// Exercise 3: for loops
//For loops
// Print numbers from 1 to 10.

    for(i=1; i<=10;i++){
        console.log(i)
    }


    //Print all even numbers between 1 and 20
    for(i=1; i<=20;i++){
        if(i%2==0){
        console.log(i)}

    }

    //Calculating the sum of all numbers from 1 to 100 and print the result. Hint: ‘+=’
    let sum=0
    for(i=1; i<=100;i++){   
        sum+=i      
    }
    console.log("Sum of all numbers from 1 to 100 using for loop ",sum)

    //Printing array elements
    const numbers = [1, 2, 3, 4, 5]

    for(i=0; i< numbers.length;i++){
        console.log(numbers[i])
    }


    //Finding the largest value
    const numbers2 = [3,7, 2, 5, 10, 6]  
//making the first value the max
     let max =numbers2[0]
    for(i=0; i< numbers.length;i++){
         if(numbers2[i]>max){
             max=numbers2[i]
         }
        
     }
     console.log("The max value is ",max)


     //Exercise 4: While loops
     //Print numbers from 1 to 10.
num=1
     while(num<=10){
        console.log(num)
        ++num
     }

//Print all even numbers between 1 and 20
numbers20 =1
while(numbers20<=20){
    console.log(numbers20)
    ++numbers20
}

//Calculate the sum of all numbers from 1 to 100 and print the result
numbers100 =1
sum=0
while(numbers100<=100){
    sum+=numbers100
   
    ++numbers100
}
console.log("Sum of 1 to 100 using while loop ",sum)
//Multiple of 50
numbers100 =1
while(numbers100<=50){
  
    if(numbers100%5==0){
        console.log(numbers100)
    }
    
    ++numbers100
}


//Exercise 5: Do While loops
//Print numbers from 1 to 10
let n=1
let sum1=0
do{
console.log(n)
++n
} while (n<=10)





    //Exercise 5: Do While loops
let count=1
let sum2=0
do{
    sum2+=count
count++
} while (count<=100)
    console.log("Sum of 1 to 100 using do while loop ",sum2)