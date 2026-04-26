const firstName = document.querySelector("#First-Name")
const lastName = document.querySelector("#Last-Name")
const phno = document.querySelector("#phone")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const checkbox = document.querySelector("#checkbox")
const createaccount = document.querySelector("#Create_Account")

createaccount.addEventListener("click",()=>{
  console.log(firstName.value.toUpperCase().slice(0,35))
  console.log(lastName.value.toUpperCase().slice(0,35))
  console.log(
  let digits = phno.value.replace(/\D/g, "").slice(0, 10)
let formatted = digits.slice(0,3) + "-" + digits.slice(3,6) + "-" + digits.slice(6,10)
console.log(formatted)

  console.log(email.value)
  console.log(password.value)
  console.log(checkbox.checked)
  firstName.value=""
  lastName.value=""
  phno.value=""
  email.value=""
  password.value=""
  checkbox.checked=false
})
