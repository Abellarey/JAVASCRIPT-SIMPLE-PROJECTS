let mytext = document.getElementById("mytext");

function kupal(value){
   mytext.value += value;
}

function clearDisplay(){
   mytext.value = "";
} 

function Calculate(){
  try{
    mytext.value = eval(mytext.value);
  }
  catch(error){
    console.log(error);
  }
}