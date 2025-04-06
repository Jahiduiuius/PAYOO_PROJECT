 document.getElementById("cashout-btn").addEventListener("click",function(event){
     event.preventDefault()
     
     const amount =  getInputValueById("cash-amount");
     const pin = getInputValueById("cash-pin");
     const mainBalance = getInnerTextById("main-balance");
     if(amount>mainBalance){
        alert("insufficient balance")
        return;
     }
     
     
      
     const account = document.getElementById("account-number-incashout").value;
     
     if (account.length===11) {
        if (pin===123456) {
            const sub= mainBalance - amount;
            setInnerTextByIdAndValue("main-balance",sub);
            const p = document.createElement("p");
        p.innerText = `${amount}Tk cashout from account ${account}`;
        const container = document.getElementById("transaction-container");
        container.appendChild(p);
        } else {
            console.log("pin thik nai")
        }
     } else {
        console.log("account thik nai")
     }
    

    
// const amount = document.getElementById("cash-amount").value;
// const convertedAmount = parseFloat(amount);
// const pinNumber = document.getElementById("cash-pin").value;
// const convertedPin = parseInt(pinNumber);
// const mainBalance = document.getElementById("main-balance").innerText;
// const convertedMainBalance = parseFloat(mainBalance)



//     if (convertedPin===101010) {
      
//         const sub = convertedMainBalance - convertedAmount;
//         document.getElementById("main-balance").innerText = sub;
    
//     } else {
//         alert("pin does't match")
//     }
    
    



 })