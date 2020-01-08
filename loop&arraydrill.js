//min and max
function max(numbers) {
  let i=0; 
  let maxNum = numbers[0];
  while(i <numbers.length){
  if(maxNum <numbers[i]){
     maxNum =numbers[i];   
  }
 i++; 
 }
return maxNum
}

function min(numbers) {
  let i=0; 
  let miniNum = numbers[0];
  while(i <numbers.length){
  if(miniNum >numbers[i]){
    miniNum = numbers[i];      
  }
  i++;
 }
return miniNum
}

//compute the average

function average (numbers){
    let sum = 0
     numbers.forEach(element => sum += element);
     return (sum/numbers.length)
  }