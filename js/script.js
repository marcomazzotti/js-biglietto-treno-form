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
  console.log(userAge.value)

  const userDistance = document.getElementById("km");
  console.log(userDistance.value)

  //prezzo base
  const priceKm = 0.21;
  let fullPrice = (userDistance * priceKm);

  let result = ""

  //prezzo scontato 
  if (userAge <= 18) {
    const discount = (fullPrice * 20 / 100);
    result = (fullPrice - discount);
    console.log(result);

  } else if (userAge >= 65) {
    const discount = (fullPrice * 40 / 100);
    result = (fullPrice - discount);
    console.log(result);

  } else {
    result = fullPrice
    console.log(result);
  }
})



