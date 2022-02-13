//onclick="secti(4, 5)"

function secti(a, b) {
  document.querySelector("#vysledek").innerHTML = a+b
}

// let c = a + b;
// return c;
// document.querySelector("#vysledek").innerHTML = c
//document.querySelector("#vysledek").innerHTML = secti(4, 5);


// onclick="upozorni('.ctverecek','green')"

function upozorni(className, color) {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  document.querySelector(className).style.backgroundColor = color;
  }

//onclick="hlaska('.ctverecek', '400')

function hlaska(className, width){
  console.log('Gratulace, právě jsi spustila tuto funkci!')
  document.querySelector(className).innerHTML = 'Gratulace, právě si spustila tuto funkci!';
  document.querySelector(className).style.width = width + 'px';
}