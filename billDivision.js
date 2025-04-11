//Solution for Bill Division
function bonAppetit(bill, k, b) {
    // Write your code here
    let total =0;
   for(let i=0;i<bill.length;i++){
    total+=bill[i]; 
   } 
   //console.log(total)
   let anna=(total-bill[k])/2;
    
    if(anna==b){
        console.log("Bon Appetit")
    }else{
        console.log(b-anna)
    }
}