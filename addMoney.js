document.getElementById("add-money").addEventListener("click",function(event){
event.preventDefault();
event.stopPropagation();

 const amount =  getInputValueById("amount");
 
 const pin = getInputValueById("pin-number");
 const mainBalance = getInnerTextById("main-balance")
 const account = document.getElementById("account-number").value;
  const selectedBank = document.getElementById("allBank").value;
  
 if(amount<0){
    alert("invalid input, give positive number")
    return;
 }   

 if (account.length===11) {
    if (pin===123456) {
        const sum= mainBalance + amount;
        setInnerTextByIdAndValue("main-balance",sum)
        const container = document.getElementById("transaction-container")
        const div = document.createElement("div");
        div.classList.add("bg-blue-700")
        div.innerHTML = `
          <h1 class="text-yellow-500 text-3xl ">add money</h1>
          <h3>${amount} selected bank ${selectedBank}</h3>
          <p>account number : ${account}</p>
          `
          container.appendChild(div)
     

    } else {
        console.log("pin thik nai")
    }
 } else {
    console.log("account thik nai")
 }


/* const amount = document.getElementById("amount").value;
const convertedAmount = parseFloat(amount);
const pinNumber = document.getElementById("pin-number").value;
const convertedPin = parseInt(pinNumber);
const mainBalance = document.getElementById("main-balance").innerText;
const convertedMainBalance = parseFloat(mainBalance)

if (amount) {
    if (convertedPin===101010) {
        const sum = convertedAmount + convertedMainBalance;
        document.getElementById("main-balance").innerText = sum;
    
    } else {
        alert("pin does't match")
    }
    
    } else {
    alert("give the amount")
}
*/


})