
//  document.getElementById("cash-out").style.display = "none"

// // 
// document.getElementById("cash-out-box").addEventListener("click",function(e){
 
//       e.stopPropagation()
//     document.getElementById("add-money").style.display = "none"
//     document.getElementById("cash-out").style.display = "block"
    
    
// })
//    document.getElementById("add-money-box").addEventListener("click",function(e){
      
//          e.stopPropagation()
//           document.getElementById("add-money").style.display = "block"
//             document.getElementById("cash-out").style.display = "none"
//       })

document.getElementById("cash-out").style.display = "none"

document.getElementById("add-money-box").addEventListener("click",function(e){
      e.stopPropagation()
      handelToggle("add-money","block")
      handelToggle("cash-out","none")
      handelToggle("transaction-history","none")
})
document.getElementById("cash-out-box").addEventListener("click",function(e){
      e.stopPropagation()
      handelToggle("add-money","none")
      handelToggle("cash-out","block")
      handelToggle("transaction-history","none")
})