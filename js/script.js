// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// alert ('ciao')

// MILESTONE 1
const submitBtn = document.getElementById("submit");
submit.addEventListener("click", function() {

  const userNameInput = document.getElementById("name");
  console.log(userNameInput.value)

  const userAge = document.getElementById("age");

  console.log(userAge.value, typeof userAge.value)

  const userDistance = document.getElementById("km");
  console.log(userDistance.value, typeof userDistance.value)

  //prezzo base
  const basePrice = 0.21 * userDistance.value;

  //prezzo scontato 
  if (userAge.value <= 18) {
    discountPrice = basePrice - (basePrice / 100 * 20)
    console.log(discountPrice)

  } else if (userAge.value >= 65) {
    discountPrice = basePrice - (basePrice / 100 * 40)
    console.log(discountPrice)

  } else {
    discountPrice = basePrice
    console.log(discountPrice);
  }
})

//output
document.getElementById('price').innerHTML = "Il suo biglietto costa:" + " " + discountPrice.toFixed(2);



