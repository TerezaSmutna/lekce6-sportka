// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 48
// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:

let osudi = [];
let tazenaCisla = [];
let historieHer = [];
let vyherniCislo = document.querySelector('#vyherni-cisla');
let tlacitko = document.querySelector('.tlacitko');
let odstavec = document.querySelector('#historie-her');


for (let i = 1; i <= 49; i = i + 1) {
  osudi.push(i);
}

//for (let j = 0; j < 7; j++) {
//vyherniCislo.innerHTML += '<span class="cislo">' + '</span>';
//}


function losuj() {
  vyherniCislo.innerHTML = "";
  tazenaCisla.forEach(function (ele) {
    osudi.push(ele);
    historieHer.push(ele);
  })
  tazenaCisla.splice(0, tazenaCisla.length);


  for (let i = 0; i < 7; i++) {
    let vyherniIndex = Math.floor(Math.random() * osudi.length);
    let vyherniCislo = osudi[vyherniIndex];
    tazenaCisla.push(vyherniCislo);
    osudi.splice(vyherniIndex, 1);
  }


  for (let j = 0; j < tazenaCisla.length; j++) {
    setTimeout(pockej, 1000);
    function pockej() { vyherniCislo.innerHTML += '<span class="cislo">' + tazenaCisla[j] + '</span>' };
  }
  setTimeout(pokracuj, 1000);

  for (let k = 0; k < historieHer.length; k++) {
    odstavec.innerHTML += historieHer[k] + ', ';
  }
}


function pokracuj() {
  //let text = 'Pokračovat v losování?';
  //if (confirm(text) == true) {
  tlacitko.textContent = 'Chceš ještě losovat?';
  //}
}


