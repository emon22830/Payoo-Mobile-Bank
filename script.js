// Login Btn Functionality
document.getElementById("login-btn").addEventListener("click", function(e){
    e.preventDefault()
   const mobileNumber = 12345678910;
   const pinNumber = 1234;
   const mobileNumberValue = document.getElementById("mobile-number").value
   const mobileNumberConverted =parseInt(mobileNumberValue)
   const pinNumberValue = document.getElementById("pin-number").value
   const pinNumberValueConverted = parseInt(pinNumberValue)

//    console.log(mobileNumberConverted, pinNumberValueConverted)

   if(mobileNumberConverted===mobileNumber && pinNumberValueConverted===pinNumber){
    // console.log("Matched")
    window.location.href="./home.html"
   }
   else{
    // console.log('Invalid')
    alert("Manger Nati, Right Info De")
   }

})