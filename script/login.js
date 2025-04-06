document.getElementById("login-btn").addEventListener("click",function(e){
    e.preventDefault();
     const accountNumber = document.getElementById("account-number").value;
     const pinNumber = document.getElementById("pin-number").value;
    //  console.log(accountNumber,pinNumber)
if (accountNumber.length===11) {
    const convertedPin = parseInt(pinNumber)
    if (convertedPin===101010) {
        window.location.href="/main.html"
    } else {
       alert("pin thik nai") 
    }

    
} else {
    alert("account number thik nai")
}

 })