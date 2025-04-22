function getInputValueById(id){
   const myValue = document.getElementById(id).value;
   const convertedValue = parseInt(myValue);
   return convertedValue;

}
function getInnerTextById(id){
   const myValue = document.getElementById(id).innerText;
   const convertedValue = parseInt(myValue);
   return convertedValue;
}

function  setInnerTextByIdAndValue(id,value){
   document.getElementById(id).innerText = value;
}

function handelToggle(id,status){
   document.getElementById(id).style.display = status;
}