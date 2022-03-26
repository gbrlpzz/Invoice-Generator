const washCarBtn = document.getElementById("car-btn")
const mowLawnBtn = document.getElementById("lawn-btn")
const pullWeedsBtn = document.getElementById("weeds-btn")
const sendInvoiceBtn = document.getElementById("send-invoice-btn")
const displayName = document.getElementById("name")
const displayPrice = document.getElementById("price")
const displayTotalPrice = document.getElementById("total")


let car = false
let lawn = false
let weeds = false

let names = []
let prices = []
let i = 0
let totalPrice = 0

function renderTasksPrices(){
	for (i = i; i < names.length; i++){
		displayName.innerHTML += `
			<p class ="name">${names[i]}</p>
`		
		displayPrice.innerHTML += `
			<p class = "price"><span class ="dollar">$</span>${prices[i]}</p>

`
		totalPrice += prices[i]
		displayTotalPrice.textContent = "$" + totalPrice
		
	}
}

washCarBtn.addEventListener("click", function(){

	if (car == false){	
			names.push("Wash Car")
			prices.push(10)
			renderTasksPrices()
	}

	car = true
})

mowLawnBtn.addEventListener("click", function(){
	if (lawn == false){
			console.log("click")
			names.push("Mow Lawn")
			prices.push(20)
			renderTasksPrices()
	}

	lawn = true
})

pullWeedsBtn.addEventListener("click", function(){

	if (weeds == false){
			names.push("Pull Weeds")
			prices.push(30)
			renderTasksPrices()
	}

	weeds = true
	
})

sendInvoiceBtn.addEventListener("click", function(){

		displayPrice.innerHTML = ""
		displayName.innerHTML = ""
		displayTotalPrice.textContent = "$0"

		car = false
		lawn = false
		weeds = false
	
		names = []
		prices = []
		i = 0
		totalPrice = 0
		
})