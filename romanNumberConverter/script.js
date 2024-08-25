const input = document.getElementById("number")
const output = document.getElementById("output")
const convertBtn = document.getElementById("convert-btn")
const numbers =[
  {values: 1000 ,symbols:"M"},
  {values: 900 , symbols:"CM"},
  {values: 500,symbols:"D"},
  {values: 400 ,symbols:"CD"},
  {values: 100 ,symbols:"C"},
  {values: 90 ,symbols:"XC"},
  {values: 50 ,symbols:"L"},
  {values: 40 ,symbols:"XL"},
  {values: 10,symbols:"X"},
  {values: 9 ,symbols:"IX"},
  {values: 5 ,symbols:"V"},
  {values: 4 , symbols:"IV"},
  {values: 1 ,symbols:"I"},
]
const showRomanNumber = () => {
  const userInput = input.value.trim()
  if(!userInput){
    output.textContent = "Please enter a valid number"
  }
  else if(userInput < 0){
    output.textContent = "Please enter a number greater than or equal to 1"
  }
  else if(userInput >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999"
  }
  
  else{
      convertNumber(userInput)
  }
}
const convertNumber = (input) => {
    input = Number(input)
    let result = ""
    for(let i =0 ; i< numbers.length ; i++){
      while (input >= numbers[i].values){
        result += numbers[i].symbols
        input -= numbers[i].values 
      }
    }
     output.textContent = result
  }
convertBtn.addEventListener("click",showRomanNumber)
number.addEventListener("keydown",(e)=>
{
  if(e.key === "Enter"){
    showRomanNumber()
  }
}
)
