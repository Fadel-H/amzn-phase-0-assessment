// 1. Write your functions here

const katzDeli = []

function line(array){
    let lineString = ""
     if (array.length === 0) {
      console.log("The line is currently empty.")  
      } 
    lineString = "The line is currently: "
      for (i=1; i<array.length+1;i++){
          lineString += `${i}. ${array[i-1]} `
     } console.log(lineString.substring(0,lineString.length-1)) 
  }
  
  function takeANumber(array, string){
    array.push(string)
  console.log(`Welcome, ${string}. You are number ${array.length } in line.`)
  }
  
  function nowServing(array){
    let numberString = ""
    if (array.length === 0){
      console.log("There is nobody waiting to be served!")
    } 
    numberString =`Currently serving ${array[0]}.`
     array = array.splice(0,1)
    console.log(numberString) 
  }

 

// 2. Example Usage

// 

 takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
 takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
 takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

 line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

 nowServing(katzDeli) //=> "Currently serving Ada."

 line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

 takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

 line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

 nowServing(katzDeli) //=> "Currently serving Grace."

 line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"