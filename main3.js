//Esto es una trivia de preguntas y respuestas

//manipulacion de DOM genero las preguntas y las respuestas en forma de inputs radioButton

let form = document.getElementById("form1");
form.innerHTML = `<input class="incorrecta"      type="radio" id="1"  value="Argentina" name="mares">
<label  class="labelIncorrecto"   for="1"  >Argentina</label><br>
<input  class="incorrecta"  type="radio"  id="2"  value="Peru" name="mares">
<label class="labelIncorrecto"  for="2">Peru</label><br>
<input class="correcta"   type="radio" id="53"  value="Peru y Argentina" name="mares">
<label class="labelCorrecto"  for="53">Peru y chile</label><br>
<input  class="incorrecta"   type="radio" id="3"  value="chile" name="mares">
<label class="labelIncorrecto"  for="3">Chile</label><br>
<input  class="incorrecta"   type="radio" id="4"  value="Ecuador" name="mares">
<label class="labelIncorrecto" for="4">Ecuador</label><br>`;

let form2 = document.getElementById("form2");
form2.innerHTML = `<input class="incorrecta"   type="radio" id="5"  value="un viento frio que atraviesa los alpes trayendo bajas temperaturas a
italia">
<label  class="labelIncorrecto"  for="5">un viento frio que atraviesa los alpes trayendo bajas temperaturas a
Italia</label><br>
<input  class="correcta"   type="radio" id="54"  value="un viento caliente que viene de italia trayendo altas temperaturas a Suiza
y autria">
<label   class="labelCorrecto" for="54">un viento caliente que viene de italia trayendo altas temperaturas a Suiza
y autria</label><br>
<input class="incorrecta"   type="radio" id="6"  value="un viento caliente que atraviesa los balcanes trayendo calor a Suiza y
Austria">
<label  class="labelIncorrecto"  for="6">un viento caliente que atraviesa los balcanes trayendo calor a suiza y
austria</label><br>
<input class="incorrecta"  type="radio" id="7"  value="un viento frio de rusia que trae bajas temperaturas a Alemania">
<label  class="labelIncorrecto"  for="7">un viento frio de rusia que trae bajas temperaturas a Alemania</label><br>
<input   class="incorrecta"  type="radio" id="8"  value="un viento caliente que atraviesa los alpes y trae altas temperaturas a
francia">
<label  class="labelIncorrecto"     for="8">un viento caliente que atraviesa los alpes y trae altas temperaturas a
francia</label><br>`;
let form3 = document.getElementById("form3");
form3.innerHTML = `<input class="incorrecta"   type="radio" id="9"  value="argelia">
<label  class="labelIncorrecto"  for="9">argelia</label><br>
<input class="incorrecta"    type="radio" id="10"  value="Libia">
<label  class="labelIncorrecto"  for="10">Libia</label><br>
<input   class="correcta"  type="radio" id="55"  value="etipia">
<label  class="labelCorrecto"  for="55">etipia</label><br>
<input  class="Incorrecta"      type="radio" id="11"  value="mauritania">
<label class="labelIncorrecto" for="11">mauritania</label><br>
<input  class="Incorrecta"    type="radio" id="12"  value="tunez">
<label  class="labelIncorrecto"   for="12">tunez</label><br>`;

let form4 = document.getElementById("form4");
form4.innerHTML = `<input  class="incorrecta"  type="radio" id="13"  value="los Angeles">
<label   class="labelIncorrecto" for="13">los Angeles</label><br>
<input class="incorrecta"   type="radio" id="14"  value="Cancun">
<label  class="labelIncorrecto"  for="14">Cancun</label><br>
<input   class="correcta"  type="radio" id="56"  value="Mar del Plata">
<label   class="labelCorrecto" for="56">Mar del Plata</label><br>
<input class="incorrecta"   type="radio" id="15"  value="Rio de Janeiro">
<label  class="labelIncorrecto"  for="15">Rio de Janeiro</label><br>
<input class="incorrecta"   type="radio" id="16"  value="honolulu">
<label  class="labelIncorrecto"  for="16">honolulu</label><br>`;

let form5 = document.getElementById("form5");
form5.innerHTML = `<input  class="incorrecta"   type="radio" id="17"  value="costa central de peru">
<label   class="labelIncorrecto" for="17">costa central de peru</label><br>
<input class="incorrecta"    type="radio" id="18"  value="Provincia de Buenos Aires, Argentina">
<label  class="labelIncorrecto"  for="18">Provincia de Buenos Aires, Argentina</label><br>
<input  class="incorrecta"   type="radio" id="19"  value="Norte de japon">
<label   class="labelIncorrecto" for="19">Norte de japon</label><br>
<input  class="correcta"   type="radio" id="57"  value="Norte de las Bahamas">
<label   class="labelCorrecto" for="57">Norte de las Bahamas</label><br>
<input  class="incorrecta"   type="radio" id="20"  value="Costa de Maryland, Estados Unidos">
<label  class="labelIncorrecto"  for="20">Costa de Maryland, Estados Unidos</label><br>`;

let form6 = document.getElementById("form6");
form6.innerHTML = `<input  class="correcta"   type="radio" id="58"  value="Austria - Republica Checa">
<label  class="labelCorrecto"  for="58">Austria - Republica Checa</label><br>
<input class="incorrecta"   type="radio" id="21"  value="España - Francia">
<label   class="labelIncorrecto" for="21">España - Francia</label><br>
<input class="incorrecta"   type="radio" id="22"  value="Corea del Norte - Rusia">
<label  class="labelIncorrecto"  for="22">Corea del Norte - Rusia</label><br>
<input class="incorrecta"   type="radio" id="23"  value="Dinamarca - Alemania">
<label  class="labelIncorrecto"  for="23">Dinamarca - Alemania</label><br>
<input class="incorrecta"   type="radio" id="24"  value="Luxemburgo - Francia">
<label   class="labelIncorrecto" for="24">Luxemburgo - Francia</label><br>`;

let form7 = document.getElementById("form7");
form7.innerHTML = `<input class="incorrecta"   type="radio" id="25"  value="">
<label   class="labelIncorrecto" for="25">costa central de peru</label><br>
<input class="incorrecta"   type="radio" id="26"  value="bahia de bengala, Banglasesh">
<label  class="labelIncorrecto"  for="26">bahia de bengala, Banglasesh</label><br>
<input class="incorrecta"   type="radio" id="27"  value="Golfo de mexico">
<label  class="labelIncorrecto"  for="27">Golfo de mexico</label><br>
<input  class="correcta"   type="radio" id="59"  value="Costa de Sudafrica">
<label  class="labelCorrecto"  for="59">Costa de Sudafrica</label><br>
<input class="incorrecta"   type="radio" id="28"   value="Japon">
<label  class="labelIncorrecto"  for="28" >Japon</label><br>`;

let form8 = document.getElementById("form8");
form8.innerHTML = `<input class="incorrecta"    type="radio" id="29"  value="kiev, Ucrania">
<label   class="labelIncorrecto" for="29">kiev, Ucrania</label><br>
<input  class="incorrecta"   type="radio" id="30"  value="Provincia de Buenos Aires, Argentina">
<label  class="labelIncorrecto"  for="30">Provincia de Buenos Aires, Argentina</label><br>
<input  class="incorrecta"   type="radio" id="31"  value="Nepal">
<label  class="labelIncorrecto"  for="31">Nepal</label><br>
<input class="incorrecta"    type="radio" id="32"  value="Costa de Maine">
<label  class="labelIncorrecto"  for="32">Costa de Maine</label><br>
<input  class="correcta"   type="radio" id="60"  value="Amsterdam">
<label  class="labelCorrecto"  for="60">Amsterdam</label><br>`;

let form9 = document.getElementById("form9");
form9.innerHTML = `<input  class="incorrecta"   type="radio" id="33"  value="base weddel, antartida">
<label  class="labelIncorrecto"  for="33">base weddel, antartida</label><br>
<input class="incorrecta"   type="radio" id="34"  value="Oymyakon, Rusia">
<label  class="labelIncorrecto"  for="34">Oymyakon, Rusia</label><br>
<input class="incorrecta"  class="incorrecta"  type="radio" id="35"  value="snag, canada">
<label  class="labelIncorrecto"  for="35">snag, canada</label><br>
<input class="incorrecta"  class="incorrecta"  type="radio" id="36"  value="Tallin estonia">
<label  class="labelIncorrecto"  for="36">Tallin estonia</label><br>
<input class="correcta"    type="radio" id="61"  value="base vostok, antartida">
<label  class="labelCorrecto"  for="61">base vostok, antartida</label><br>`;

let form10 = document.getElementById("form10");
form10.innerHTML = `<input   class="correcta"  type="radio" id="62"  value="china, filipinas y japon">
<label   class="labelCorrecto" for="62">china, filipinas y japon</label><br>
<input class="incorrecta"  type="radio" id="37"  value="Mar caribe">
<label   class="labelIncorrecto" for="37">Mar caribe</label><br>
<input class="incorrecta"  type="radio" id="38"  value="Australia">
<label  class="labelIncorrecto"  for="38">Australia</label><br>
<input class="incorrecta"  type="radio" id="39"  value="india">
<label  class="labelIncorrecto"  for="39">india</label><br>
<input class="incorrecta"  type="radio" id="40"  value="Madagascar">
<label  class="labelIncorrecto"  for="40">Madagascar</label><br>`;

let form11 = document.getElementById("form11");
form11.innerHTML = `<input  class="correcta"   type="radio" id="63"  value="Reino unido">
<label  class="labelCorrecto"  for="63">Reino unido</label><br>
<input   class="incorrecta"  class="incorrecta"   type="radio" id="41"  value="Estados unidos">
<label class="labelIncorrecto" for="41">Estados unidos</label><br>
<input   class="incorrecta"  type="radio" id="42"  value="Australia">
<label class="labelIncorrecto" for="42">Australia</label><br>
<input    class="incorrecta"  class="incorrecta"    type="radio" id="43"  value="Argentina">
<label  class="labelIncorrecto" for="43">Argentina</label><br>
<input    class="incorrecta"   type="radio" id="44"  value="Sudafrica">
<label class="labelIncorrecto" for="44">Sudafrica</label><br>`;

let form12 = document.getElementById("form12");
form12.innerHTML = `<input class="incorrecta"    type="radio" id="45"  value="argentina, paraguay y brasil">
<label  class="labelIncorrecto"  for="45">Argentina, Paraguay y Brasil</label><br>
<input class="incorrecta"    type="radio" id="46"  value="Estados unidos, zona central">
<label  class="labelIncorrecto"  for="46">Estados unidos, zona central</label><br>
<input class="incorrecta"    type="radio" id="47"  value="Hungria">
<label   class="labelIncorrecto" for="47">Hungria</label><br>
<input class="incorrecta"    type="radio" id="48"  value="australia">
<label  class="labelIncorrecto"  for="48">Australia</label><br>
<input  class="correcta"   type="radio" id="64"  value="Namibia">
<label   class="labelCorrecto" for="64">Namibia</label><br>`;

let form13 = document.getElementById("form13");
form13.innerHTML = `<input class="incorrecta"  type="radio" id="49"  value="chile">
<label   class="labelIncorrecto" for="49"></label>Chile<br>
<input class="incorrecta"  type="radio" id="50"  value="Estados unidos">
<label  class="labelIncorrecto"  for="50">Estados unidos</label><br>
<input class="incorrecta"  type="radio" id="51"  value="japon">
<label  class="labelIncorrecto"  for="51">Japon</label><br>
<input  class="correcta"   type="radio" id="65"  value="cuba">
<label class="labelCorrecto" for="65">Cuba</label><br>
<input   class="incorrecta"  type="radio" id="52"  value="china">
<label  class="labelIncorrecto"  for="52">China</label><br>`;
const rta53 = document.getElementById("53");
const rta54 = document.getElementById("54");
const rta55 = document.getElementById("55");
const rta56 = document.getElementById("56");
const rta57 = document.getElementById("57");
const rta58 = document.getElementById("58");
const rta59 = document.getElementById("59");
const rta60 = document.getElementById("60");
const rta61 = document.getElementById("61");
const rta62 = document.getElementById("62");
const rta63 = document.getElementById("63");
const rta64 = document.getElementById("64");
const rta65 = document.getElementById("65");
// Aca, cuando el jugador aprieta una rta correcta, (todas las respuestas correctas tienen una clase llamada "labelCorrecto"), genero atraves del css(classList.add) un fondo verde, y genero un cambio de color verde en la letra
//Ademas declaro una variable cuenta que va sumado uno cada vez que se hace click en la rta correcta
const tagsLabelCorrecto = document.getElementsByClassName("labelCorrecto");
let cuenta = 0;
rta53.addEventListener("click", () => {
  tagsLabelCorrecto[0].classList.add("labelVerde");

  form1.classList.add("fondoVerde");
  cuenta = cuenta + 1;
});

rta54.addEventListener("click", () => {
  tagsLabelCorrecto[1].classList.add("labelVerde");

  form2.classList.add("fondoVerde");

  cuenta = cuenta + 1;
});
rta55.addEventListener("click", () => {
  tagsLabelCorrecto[2].classList.add("labelVerde");
  form3.classList.add("fondoVerde");

  cuenta = cuenta + 1;
});
rta56.addEventListener("click", () => {
  tagsLabelCorrecto[3].classList.add("labelVerde");
  form4.classList.add("fondoVerde");
  cuenta = cuenta + 1;
});
rta57.addEventListener("click", () => {
  tagsLabelCorrecto[4].classList.add("labelVerde");
  form5.classList.add("fondoVerde");
  cuenta = cuenta + 1;
});
rta58.addEventListener("click", () => {
  tagsLabelCorrecto[5].classList.add("labelVerde");
  form6.classList.add("fondoVerde");
  cuenta = cuenta + 1;
});
rta59.addEventListener("click", () => {
  tagsLabelCorrecto[6].classList.add("labelVerde");
  form7.classList.add("fondoVerde");
  cuenta = cuenta + 1;
});
rta60.addEventListener("click", () => {
  tagsLabelCorrecto[7].classList.add("labelVerde");

  form8.classList.add("fondoVerde");
  cuenta = cuenta + 1;
});
rta61.addEventListener("click", () => {
  tagsLabelCorrecto[8].classList.add("labelVerde");

  form9.classList.add("fondoVerde");
  cuenta = cuenta + 1;
});
rta62.addEventListener("click", () => {
  tagsLabelCorrecto[9].classList.add("labelVerde");

  form10.classList.add("fondoVerde");
  cuenta = cuenta + 1;
});
rta63.addEventListener("click", () => {
  tagsLabelCorrecto[10].classList.add("labelVerde");

  form11.classList.add("fondoVerde");
  cuenta = cuenta + 1;
});
rta64.addEventListener("click", () => {
  tagsLabelCorrecto[11].classList.add("labelVerde");

  form12.classList.add("fondoVerde");
  cuenta = cuenta + 1;
});

//En la ultima respuesta(por eso pedi que se responda en orden y hasta la ultima pregunta, remuevo todo el juego y tiro con un sweet alert el resultado, clasificandolo en bueno y malo segun el puntaje)
rta65.addEventListener("click", () => {
  cuenta = cuenta + 1;
  let preguntas = document.getElementById("preguntas");
  preguntas.remove();
  let trivia = document.getElementById("trivia");
  trivia.classList.add("background");
  //OPERADORES AVANZADOS: OPERADOR TERNARIO MAS USO DE LIBRERIA: SWEET ALERT
  cuenta >= 0 && cuenta < 7
    ? Swal.fire({
        title: "juego acabado, obtuviste " + cuenta + " puntos",
        text: "Todos podemos mejorar! adelante",
        imageUrl: "/imgClima/preguntasMal.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      })
    : Swal.fire({
        title: "juego acabado, obtuviste " + cuenta + " puntos",
        text: "Esta bien! Te gusta y estas bastante metido en tema. Adelante!",
        imageUrl: "/imgClima/preguntasMedio.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
});

const form1 = document.getElementById("form1");
const rta1 = document.getElementById("1");
const rta2 = document.getElementById("2");
const rta3 = document.getElementById("3");
const rta4 = document.getElementById("4");
const rta5 = document.getElementById("5");
const rta6 = document.getElementById("6");
const rta7 = document.getElementById("7");
const rta8 = document.getElementById("8");
const rta9 = document.getElementById("9");
const rta10 = document.getElementById("10");
const rta11 = document.getElementById("11");
const rta12 = document.getElementById("12");
const rta13 = document.getElementById("13");
const rta14 = document.getElementById("14");
const rta15 = document.getElementById("15");
const rta16 = document.getElementById("16");
const rta17 = document.getElementById("17");
const rta18 = document.getElementById("18");
const rta19 = document.getElementById("19");
const rta20 = document.getElementById("20");
const rta21 = document.getElementById("21");
const rta22 = document.getElementById("22");
const rta23 = document.getElementById("23");
const rta24 = document.getElementById("24");
const rta25 = document.getElementById("25");
const rta26 = document.getElementById("26");
const rta27 = document.getElementById("27");
const rta28 = document.getElementById("28");
const rta29 = document.getElementById("29");
const rta30 = document.getElementById("30");
const rta31 = document.getElementById("31");
const rta32 = document.getElementById("32");
const rta33 = document.getElementById("33");
const rta34 = document.getElementById("34");
const rta35 = document.getElementById("35");
const rta36 = document.getElementById("36");
const rta37 = document.getElementById("37");
const rta38 = document.getElementById("38");
const rta39 = document.getElementById("39");
const rta40 = document.getElementById("40");
const rta41 = document.getElementById("41");
const rta42 = document.getElementById("42");
const rta43 = document.getElementById("43");
const rta44 = document.getElementById("44");
const rta45 = document.getElementById("45");
const rta46 = document.getElementById("46");
const rta47 = document.getElementById("47");
const rta48 = document.getElementById("48");
const rta49 = document.getElementById("49");
const rta50 = document.getElementById("50");
const rta51 = document.getElementById("51");
const rta52 = document.getElementById("52");

// Aca, cuando el jugador aprieta una rta incorrecta, (todas las respuestas incorrectas tienen una clase llamada "labelIncorrecto"), genero atraves del css(classList.add) un fondo negro, y genero un cambio de color rojo en la letra
// ademas a tarves de manipulacion del DOM genero un parrafo aclarando cual es la respuesta correcta, con un setTimeout de 10 segundos
const tagsLabelIncorrectas = document.getElementsByClassName("labelIncorrecto");

rta1.addEventListener("click", () => {
  tagsLabelIncorrectas[0].classList.add("labelRojo");
  form1.classList.add("fondoNegro");

  let p = document.createElement("p");
  p.innerText =
    "La corriente de Humboldt es una corriente fría que surge en el extremo sur de Chile y circula hasta la costa centro norte de Peru, donde se junta con la corriente cálida Australiana, aproximadamente en la latitud 5° sur. Eso explica porque el agua en lima por ejemplo es fria, cuando esta a la misma latitud por ejemplo que salvador de bahia en Brasil, donde el agua tiene 30°";
  form1.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});

rta2.addEventListener("click", () => {
  tagsLabelIncorrectas[1].classList.add("labelRojo");
  form1.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La corriente de Humboldt es una corriente fria que surge en el extremo sur de Chile y circula hasta la costa centro norte de Peru, donde se junta con la corriente calida Australiana, aproximadamente en la latitud 5° sur. Eso explica porque el agua en lima por ejemplo es fria, cuando esta a la misma latitud por ejemplo que salvador de bahia en Brasil, donde el agua tiene 30°";
  form1.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});

rta3.addEventListener("click", () => {
  tagsLabelIncorrectas[2].classList.add("labelRojo");
  form1.classList.add("fondoNegro");

  let p = document.createElement("p");
  p.innerText =
    "La corriente de Humboldt es una corriente fria que surge en el extremo sur de Chile y circula hasta la costa centro norte de Peru, donde se junta con la corriente calida Australiana, aproximadamente en la latitud 5° sur. Eso explica porque el agua en lima por ejemplo es fria, cuando esta a la misma latitud por ejemplo que salvador de bahia en Brasil, donde el agua tiene 30°";
  form1.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});

rta4.addEventListener("click", () => {
  tagsLabelIncorrectas[3].classList.add("labelRojo");
  form1.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La corriente de Humboldt es una corriente fria que surge en el extremo sur de Chile y circula hasta la costa centro norte de Peru, donde se junta con la corriente calida Australiana, aproximadamente en la latitud 5° sur. Eso explica porque el agua en lima por ejemplo es fria, cuando esta a la misma latitud por ejemplo que salvador de bahia en Brasil, donde el agua tiene 30°";
  form1.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});

rta5.addEventListener("click", () => {
  tagsLabelIncorrectas[4].classList.add("labelRojo");
  form2.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "El Fohen  es un viento que proviene del centro norte de Africa, y se va calentando a medida que se dirige al norte. Atraviesa toda Italia y cuando llega a los Alpes se eleva, se seca, y descarga calor y sequedad a los paises alpinos. La gente de la zona manifiesta cefaleas y mareos por estos cambios abruptos en la humedad y la temperatura";
  form2.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta6.addEventListener("click", () => {
  tagsLabelIncorrectas[5].classList.add("labelRojo");
  form2.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "El Fohen es un viento que proviene del centro norte de Africa, y se va calentando a medida que se dirige al norte. Atraviesa toda Italia y cuando llega a los Alpes se eleva, se seca, y descarga calor y sequedad a los paises alpinos. La gente de la zona manifiesta cefaleas y mareos por estos cambios abruptos en la humedad y la temperatura";
  form2.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta7.addEventListener("click", () => {
  tagsLabelIncorrectas[6].classList.add("labelRojo");
  form2.classList.add("fondoNegro");

  let p = document.createElement("p");
  p.innerText =
    "El Fohen es un viento que proviene del centro norte de Africa, y se va calentando a medida que se dirige al norte. Atraviesa toda Italia y cuando llega a los Alpes se eleva, se seca, y descarga calor y sequedad a los paises alpinos. La gente de la zona manifiesta cefaleas y mareos por estos cambios abruptos en la humedad y la temperatura";
  form2.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta8.addEventListener("click", () => {
  tagsLabelIncorrectas[7].classList.add("labelRojo");
  form2.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "El Fohen es un viento que proviene del centro norte de Africa, y se va calentando a medida que se dirige al norte. Atraviesa toda Italia y cuando llega a los Alpes se eleva, se seca, y descarga calor y sequedad a los paises alpinos. La gente de la zona manifiesta cefaleas y mareos por estos cambios abruptos en la humedad y la temperatura";
  form2.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta9.addEventListener("click", () => {
  tagsLabelIncorrectas[8].classList.add("labelRojo");
  form3.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Etiopia esta en el cuerno de la india, en el oceano índico, y es el único país de los 5 que forma parte de la África subsahariana";
  form3.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta10.addEventListener("click", () => {
  tagsLabelIncorrectas[9].classList.add("labelRojo");
  form3.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Etiopia esta en el cuerno de la india, en el oceano indico, y es el único país de los 5 que forma parte de la África subsahariana";
  form3.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta11.addEventListener("click", () => {
  tagsLabelIncorrectas[10].classList.add("labelRojo");
  form3.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Etiopia esta en el cuerno de la india, en el oceano indico, y es el único país de los 5 que forma parte de la África subsahariana";
  form3.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta12.addEventListener("click", () => {
  tagsLabelIncorrectas[11].classList.add("labelRojo");
  form3.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Etiopia esta en el cuerno de la india, en el oceano indico, y es el único país de los 5 que forma parte de la África subsahariana";
  form3.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta13.addEventListener("click", () => {
  tagsLabelIncorrectas[12].classList.add("labelRojo");
  form4.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La única ciudad de las 5 con un clima templado oceanico de libro (tambien llamado clima templado tipo chino) es Mar del plata, una ciudad de la costa Argentina con alta humedad, veranos suaves e inviernos suavizados tambien por la influencia del mar";
  form4.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta14.addEventListener("click", () => {
  tagsLabelIncorrectas[13].classList.add("labelRojo");
  form4.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La unica ciudad de las 5 con un clima templado oceanico de libro (tambien llamado clima templado tipo chino) es Mar del plata, una ciudad de la costa Argentina con alta humedad, veranos suaves e inviernos suavizados tambien por la influencia del mar";
  form4.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta15.addEventListener("click", () => {
  tagsLabelIncorrectas[14].classList.add("labelRojo");
  form4.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La unica ciudad de las 5 con un clima templado oceanico de libro (tambien llamado clima templado tipo chino) es Mar del plata, una ciudad de la costa Argentina con alta humedad, veranos suaves e inviernos suavizados tambien por la influencia del mar";
  form4.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta16.addEventListener("click", () => {
  tagsLabelIncorrectas[15].classList.add("labelRojo");
  form4.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La unica ciudad de las 5 con un clima templado oceanico de libro (tambien llamado clima templado tipo chino) es Mar del plata, una ciudad de la costa Argentina con alta humedad, veranos suaves e inviernos suavizados tambien por la influencia del mar";
  form4.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta17.addEventListener("click", () => {
  tagsLabelIncorrectas[16].classList.add("labelRojo");
  form5.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La única zona que no corresponde al choque de dos corrientes marítimas opuestas en temperaturas y por ende  la unica respuesta correcta, es el norte de bahamas. Esta zona esta influenciada solo por una corriente cálida que es la del golfo de méxico";
  form5.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta18.addEventListener("click", () => {
  tagsLabelIncorrectas[17].classList.add("labelRojo");
  form5.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La única zona que no corresponde al choque de dos corrientes marítimas opuestas en temperaturas y por ende  la unica respuesta correcta, es el norte de bahamas. Esta zona esta influenciada solo por una corriente cálida que es la del golfo de méxico";
  form5.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta19.addEventListener("click", () => {
  tagsLabelIncorrectas[18].classList.add("labelRojo");
  form5.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La única zona que no corresponde al choque de dos corrientes marítimas opuestas en temperaturas y por ende  la unica respuesta correcta, es el norte de bahamas. Esta zona esta influenciada solo por una corriente cálida que es la del golfo de méxico";
  form5.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta20.addEventListener("click", () => {
  tagsLabelIncorrectas[19].classList.add("labelRojo");
  form5.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La única zona que no corresponde al choque de dos corrientes marítimas opuestas en temperaturas y por ende  la unica respuesta correcta, es el norte de bahamas. Esta zona esta influenciada solo por una corriente cálida que es la del golfo de méxico";
  form5.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta21.addEventListener("click", () => {
  tagsLabelIncorrectas[20].classList.add("labelRojo");
  form6.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Si trazaramos una linea perfectamente recta que cruzara la frontera del estado de dakota del norte con Canada, esta linea cruzaria la frontera de republica Checa con Austria, el resto de las opciones o esta mas al sur o mas al norte";
  form6.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta22.addEventListener("click", () => {
  tagsLabelIncorrectas[21].classList.add("labelRojo");
  form6.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Si trazaramos una linea perfectamente recta que cruzara la frontera del estado de dakota del norte con Canada, esta linea cruzaria la frontera de republica Checa con Austria, el resto de las opciones o esta mas al sur o mas al norte";
  form6.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta23.addEventListener("click", () => {
  tagsLabelIncorrectas[22].classList.add("labelRojo");
  form6.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Si trazaramos una linea perfectamente recta que cruzara la frontera del estado de dakota del norte con Canada, esta linea cruzaria la frontera de republica Checa con Austria, el resto de las opciones o esta mas al sur o mas al norte";
  form6.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta24.addEventListener("click", () => {
  tagsLabelIncorrectas[23].classList.add("labelRojo");

  form6.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Si trazaramos una linea perfectamente recta que cruzara la frontera del estado de dakota del norte con Canada, esta linea cruzaria la frontera de republica Checa con Austria, el resto de las opciones o esta mas al sur o mas al norte";
  form6.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta25.addEventListener("click", () => {
  tagsLabelIncorrectas[24].classList.add("labelRojo");
  form7.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Bangladesh es propensa a megainundaciones, superciclones tropicales, tornados y ademas aqui cayo el granizo mas pesado  del que se tiene registro (1kg), La costa central de peru es propensa a potenciales megaterremotos y tsunamies mortales, La costa del golfo de mexico a huracanes como Katrina en 2005, y japon se cree que va a ser una de las posibles zonas donde ocurra el terremoto mas devastador de la tierra ademas de ser proclive a los tsunamis";
  form7.append(p);
  setTimeout(() => {
    p.remove();
  }, 14000);
});
rta26.addEventListener("click", () => {
  tagsLabelIncorrectas[25].classList.add("labelRojo");
  form7.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Bangladesh es propensa a megainundaciones, superciclones tropicales, tornados y ademas aqui cayo el granizo mas pesado  del que se tiene registro (1kg), La costa central de peru es propensa a potenciales megaterremotos y tsunamies mortales, La costa del golfo de mexico a huracanes como Katrina en 2005, y japon se cree que va a ser una de las posibles zonas donde ocurra el terremoto mas devastador de la tierra ademas de ser proclive a los tsunamis";
  form7.append(p);
  setTimeout(() => {
    p.remove();
  }, 14000);
});

rta27.addEventListener("click", () => {
  tagsLabelIncorrectas[26].classList.add("labelRojo");
  form7.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Bangladesh es propensa a megainundaciones, superciclones tropicales, tornados y ademas aqui cayo el granizo mas pesado  del que se tiene registro (1kg), La costa central de peru es propensa a potenciales megaterremotos y tsunamies mortales, La costa del golfo de mexico a huracanes como Katrina en 2005, y japon se cree que va a ser una de las posibles zonas donde ocurra el terremoto mas devastador de la tierra ademas de ser proclive a los tsunamis";
  form7.append(p);
  setTimeout(() => {
    p.remove();
  }, 14000);
});
rta28.addEventListener("click", () => {
  tagsLabelIncorrectas[27].classList.add("labelRojo");
  form7.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Bangladesh es propensa a megainundaciones, superciclones tropicales, tornados y ademas aqui cayo el granizo mas pesado  del que se tiene registro (1kg), La costa central de peru es propensa a potenciales megaterremotos y tsunamies mortales, La costa del golfo de mexico a huracanes como Katrina en 2005, y japon se cree que va a ser una de las posibles zonas donde ocurra el terremoto mas devastador de la tierra ademas de ser proclive a los tsunamis";
  form7.append(p);
  setTimeout(() => {
    p.remove();
  }, 14000);
});
rta29.addEventListener("click", () => {
  tagsLabelIncorrectas[28].classList.add("labelRojo");
  form8.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La respuesta es Amsterdam, Esta ciudad es suceptible a inundarse por su obvia cercania al mar   ademas por estar a -2 metros del nivel del mar, un autentico pozo. Condiciones similares se observan en las islas Maldivas (-5m)";
  form8.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta30.addEventListener("click", () => {
  tagsLabelIncorrectas[29].classList.add("labelRojo");
  form8.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La respuesta es Amsterdam, Esta ciudad es suceptible a inundarse por su obvia cercania al mar   ademas por estar a -2 metros del nivel del mar, un autentico pozo. Condiciones similares se observan en las islas Maldivas (-5m)";
  form8.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta31.addEventListener("click", () => {
  tagsLabelIncorrectas[30].classList.add("labelRojo");
  form8.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La respuesta es Amsterdam, Esta ciudad es suceptible a inundarse por su obvia cercania al mar   ademas por estar a -2 metros del nivel del mar, un autentico pozo. Condiciones similares se observan en las islas Maldivas (-5m)";
  form8.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta32.addEventListener("click", () => {
  tagsLabelIncorrectas[31].classList.add("labelRojo");
  form8.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La respuesta es Amsterdam, Esta ciudad es suceptible a inundarse por su obvia cercania al mar   ademas por estar a -2 metros del nivel del mar, un autentico pozo. Condiciones similares se observan en las islas Maldivas (-5m)";
  form8.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta33.addEventListener("click", () => {
  tagsLabelIncorrectas[32].classList.add("labelRojo");
  form9.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La temperatura mas baja de la tierra fue de -89.2 °C en la base Vostok en la antartida";
  form9.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta34.addEventListener("click", () => {
  tagsLabelIncorrectas[33].classList.add("labelRojo");
  form9.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La temperatura mas baja de la tierra fue de -89.2 °C en la base Vostok en la antartida";
  form9.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta35.addEventListener("click", () => {
  tagsLabelIncorrectas[34].classList.add("labelRojo");
  form9.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La temperatura mas baja de la tierra fue de -89.2 °C en la base Vostok en la antartida";
  form9.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta36.addEventListener("click", () => {
  tagsLabelIncorrectas[35].classList.add("labelRojo");
  form9.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La temperatura mas baja de la tierra fue de -89.2 °C en la base Vostok en la antartida";
  form9.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta37.addEventListener("click", () => {
  tagsLabelIncorrectas[36].classList.add("labelRojo");
  form10.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "De las regiones ciclonicamente activas, la que tiene mas cantidad de tifones y los mas fuertes es el pacifico oriental (china, filipinas y Japon)";
  form10.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta38.addEventListener("click", () => {
  tagsLabelIncorrectas[37].classList.add("labelRojo");
  form10.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "De las regiones ciclonicamente activas, la que tiene mas cantidad de tifones y los mas fuertes es el pacifico oriental (china, filipinas y Japon)";
  form10.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta39.addEventListener("click", () => {
  tagsLabelIncorrectas[38].classList.add("labelRojo");
  form10.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "De las regiones ciclonicamente activas, la que tiene mas cantidad de tifones y los mas fuertes es el pacifico oriental (china, filipinas y Japon)";
  form10.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta40.addEventListener("click", () => {
  tagsLabelIncorrectas[39].classList.add("labelRojo");
  form10.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "De las regiones ciclonicamente activas, la que tiene mas cantidad de tifones y los mas fuertes es el pacifico oriental (china, filipinas y Japon)";
  form10.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta41.addEventListener("click", () => {
  tagsLabelIncorrectas[40].classList.add("labelRojo");
  form11.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Uno podria pensar en Estados Unidos, pero no, el pais con mas tornados por km cuadrado es Reino unido. (En estados Unidos se dan los mas mortales)";
  form11.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta42.addEventListener("click", () => {
  tagsLabelIncorrectas[41].classList.add("labelRojo");
  form11.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Uno podria pensar en Estados Unidos, pero no, el pais con mas tornados por km cuadrado es Reino unido. (En estados Unidos se dan los mas mortales)";
  form11.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta43.addEventListener("click", () => {
  tagsLabelIncorrectas[42].classList.add("labelRojo");
  form11.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Uno podria pensar en Estados Unidos, pero no, el pais con mas tornados por km cuadrado es Reino unido. (En estados Unidos se dan los mas mortales)";
  form11.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta44.addEventListener("click", () => {
  tagsLabelIncorrectas[43].classList.add("labelRojo");
  form11.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Uno podria pensar en Estados Unidos, pero no, el pais con mas tornados por km cuadrado es Reino unido. (En estados Unidos se dan los mas mortales)";
  form11.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta45.addEventListener("click", () => {
  tagsLabelIncorrectas[44].classList.add("labelRojo");
  form12.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La unica zona que no es una llanura de las opciones, si no que es un desierto, es Namibia";
  form12.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta46.addEventListener("click", () => {
  tagsLabelIncorrectas[45].classList.add("labelRojo");
  form12.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La unica zona que no es una llanura de las opciones, si no que es un desierto, es Namibia";
  form12.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta47.addEventListener("click", () => {
  tagsLabelIncorrectas[46].classList.add("labelRojo");
  form12.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "Las unica zona que no es una llanura de las opciones, si no que es un desierto, es Namibia";
  form12.append(p);
  setTimeout(() => {
    Clima;
    p.remove();
  }, 10000);
});
rta48.addEventListener("click", () => {
  tagsLabelIncorrectas[47].classList.add("labelRojo");
  form12.classList.add("fondoNegro");
  let p = document.createElement("p");
  p.innerText =
    "La unica zona que no es una llanura de las opciones, si no que es un desierto, es Namibia";
  form12.append(p);
  setTimeout(() => {
    p.remove();
  }, 10000);
});
rta49.addEventListener("click", () => {
  let preguntas = document.getElementById("preguntas");
  preguntas.remove();
  let trivia = document.getElementById("trivia");
  trivia.classList.add("background");
  //OPERADORES AVANZADOS: OPERADOR TERNARIO MAS USO DE LIBRERIA: SWEET ALERT
  cuenta >= 0 && cuenta < 7
    ? Swal.fire({
        title: "juego acabado, obtuviste " + cuenta + " puntos",
        text: "Todos podemos mejorar! adelante",
        imageUrl: "/imgClima/preguntasMal.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      })
    : Swal.fire({
        title: "juego acabado, obtuviste " + cuenta + " puntos",
        text: "Esta bien! Te gusta y estas bastante metido en tema. Adelante!",
        imageUrl: "/imgClima/preguntasMedio.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
});
rta50.addEventListener("click", () => {
  let preguntas = document.getElementById("preguntas");
  preguntas.remove();
  let trivia = document.getElementById("trivia");
  trivia.classList.add("background");
  //OPERADORES AVANZADOS: OPERADOR TERNARIO MAS USO DE LIBRERIA: SWEET ALERT
  cuenta >= 0 && cuenta < 7
    ? Swal.fire({
        title: "juego acabado, obtuviste " + cuenta + " puntos",
        text: "Todos podemos mejorar! adelante",
        imageUrl: "/imgClima/preguntasMal.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      })
    : Swal.fire({
        title: "juego acabado, obtuviste " + cuenta + " puntos",
        text: "Esta bien! Te gusta y estas bastante metido en tema. Adelante!",
        imageUrl: "/imgClima/preguntasMedio.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
});
rta51.addEventListener("click", () => {
  let preguntas = document.getElementById("preguntas");
  preguntas.remove();
  let trivia = document.getElementById("trivia");
  trivia.classList.add("background");
  //OPERADORES AVANZADOS: OPERADOR TERNARIO MAS USO DE LIBRERIA: SWEET ALERT
  cuenta >= 0 && cuenta < 7
    ? Swal.fire({
        title: "juego acabado, obtuviste " + cuenta + " puntos",
        text: "Todos podemos mejorar! adelante",
        imageUrl: "/imgClima/preguntasMal.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      })
    : Swal.fire({
        title: "juego acabado, obtuviste " + cuenta + " puntos",
        text: "Esta bien! Te gusta y estas bastante metido en tema. Adelante!",
        imageUrl: "/imgClima/preguntasMedio.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
});
rta52.addEventListener("click", () => {
  let preguntas = document.getElementById("preguntas");
  preguntas.remove();
  let trivia = document.getElementById("trivia");
  trivia.classList.add("background");
  //OPERADORES AVANZADOS: OPERADOR TERNARIO MAS USO DE LIBRERIA: SWEET ALERT
  cuenta >= 0 && cuenta < 7
    ? Swal.fire({
        title: "juego acabado, obtuviste " + cuenta + " puntos",
        text: "Todos podemos mejorar! adelante",
        imageUrl: "/imgClima/preguntasMal.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      })
    : Swal.fire({
        title: "juego acabado, obtuviste " + cuenta + " puntos",
        text: "Esta bien! Te gusta y estas bastante metido en tema. Adelante!",
        imageUrl: "/imgClima/preguntasMedio.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
});
