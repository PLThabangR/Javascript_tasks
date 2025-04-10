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