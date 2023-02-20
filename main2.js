//aqui genero objetos a traves de un constructor Clima y luego pusheo esos objetos en un array ciudades
//Se agregaran dos metodos a este constructor
class Clima {
  constructor(
    nombre,
    pais,
    id,
    description,
    mar,
    temperaturaEnero,
    temperaturaAbril,
    temperaturaJulio,
    temperaturaSeptiembre,
    lluviaEnero,
    lluviaAbril,
    lluviaJulio,
    lluviaSeptiembre,
    diasSolEnero,
    diasSolSeptiembre,
    nieve,
    huracanes,
    tornados
  ) {
    (this.nombre = nombre),
      (this.pais = pais),
      (this.id = id),
      (this.mar = mar),
      (this.description = description),
      (this.temperaturaEnero = temperaturaEnero),
      (this.temperaturaAbril = temperaturaAbril),
      (this.temperaturaJulio = temperaturaJulio),
      (this.temperaturaSeptiembre = temperaturaEnero),
      (this.lluviaEnero = lluviaEnero),
      (this.lluviaAbril = lluviaAbril),
      (this.lluviaJulio = lluviaJulio),
      (this.lluviaSeptiembre = lluviaSeptiembre),
      (this.diasSolEnero = diasSolEnero),
      (this.diasSolSeptiembre = diasSolSeptiembre),
      (this.nieve = nieve),
      (this.huracanes = huracanes),
      (this.tornados = tornados);
  }
  //Dos métodos que sacan el promedio de la temperatura y calulan las lluvias totales
  temperaturaPromedio() {
    return (
      (this.temperaturaEnero +
        this.temperaturaAbril +
        this.temperaturaJulio +
        this.temperaturaSeptiembre) /
      4
    );
  }
  lluviasTotales() {
    return (
      this.lluviaAbril +
      this.lluviaEnero +
      this.lluviaJulio +
      this.lluviaSeptiembre
    );
  }
}

const ciudades = [];

//pusheamos los objetos instanciados en el array

ciudades.push(
  new Clima(
    "Roma",
    "Italia",
    1,
    "ciudad del centro de Italia, en la costa del tirreno. Alberga el coliseo, cientos de construcciones históricas, museos y la conocidísima fontana di trevi. Presenta un clima Mediterraneo con inviernos suaves y veranos muy calientes",
    true,
    10,
    15,
    25,
    19,
    150,
    300,
    370,
    450,
    18,
    30,
    true,
    false,
    true
  )
);
ciudades.push(
  new Clima(
    "Budapest",
    "Hungria",
    2,
    "Capital de Hungría, localizada en una fértil y basta llanura en el centro de Europa, presenta un clima templado continental con moderada cantidad de lluvias. En inviernos las temperaturas son heladas mientras que los veranos son abrazadores. Son comunes las tempestades de granizo y las tormentas en verano",
    false,
    4,
    7,
    27,
    15,
    150,
    370,
    470,
    450,
    30,
    true,
    false,
    true
  )
);
ciudades.push(
  new Clima(
    "Kiev",
    "Ucrania",
    3,
    "Localizada en el norte de Ucrania, en el polo opuesto a la costa del mar negro, Kiev presenta inviernos helados con temperaturas record que pueden ser de hasta -40°C y veranos bastantes agradables",
    false,
    1,
    6,
    24,
    17,
    150,
    200,
    270,
    250,
    19,
    30,
    true,
    false,
    true
  )
),
  ciudades.push(
    new Clima(
      "Madrid",
      "España",
      4,
      "situada en el centro de España es la ciudad con menos influencia oceánica del pais y con mas amplitud térmica. Tiene un clima seco, bien mediterraneo con vegetación típica de este ambiente, lo que se pone de manifiesto con la abundancia de aceite de oliva y buenos vinos",
      false,
      12,
      15,
      29,
      19,
      120,
      80,
      70,
      100,
      23,
      30,
      true,
      false,
      false
    )
  );

ciudades.push(
  new Clima(
    "Atenas",
    "Grecia",
    5,
    "La ciudad con el clima mas cálido de Europa, con muy escasas lluvias y veranos muy pesados en cuanto a temperatura. Gran similitud climática con el norte de Africa y el sur de Italia",
    true,
    10,
    13,
    29,
    18,
    150,
    100,
    70,
    50,
    28,
    30,
    true,

    false,

    false
  )
);
ciudades.push(
  new Clima(
    "Viena",
    "Austria",
    6,
    "Es una de las ciudades con el desarrollo socioeconómico mas alto del mundo, con una fachada que combina la modernidad con la arquitectura antigua. Situada al noreste de los alpes, recibe mas influencia de vientos frios y está más protegida del viento de Africa, lo que le brinda un ambiente mas agradable en verano, con mucho frio en invierno. Muy frecuente ver la nieve en esta ciudad durante la epoca invernal",
    false,
    1,
    3,
    22,
    12,
    13,
    150,
    100,
    170,
    150,
    18,
    22,
    true,
    false
  )
),
  ciudades.push(
    new Clima(
      "Berlin",
      "Alemania",
      7,
      "Presenta una diferenciación estacional en cuanto a sus condiciones climáticas muy bien marcadas. Nieve y graupel frecuente en invierno, y veranos agradables, Sin embargo su cercanía al océano atlántico modelan bastante los registros térmicos",
      false,
      3,
      10,
      23,
      16,
      150,
      120,
      110,
      210,
      18,
      23,
      true,
      false,
      true
    )
  );
ciudades.push(
  new Clima(
    "Amsterdam",
    "Holanda",
    8,
    "Clima oceánico por naturaleza, con temperaturas muy moderadas por la influencia del mar. Cabe destacar que Amsterdam es el lugar mas suceptible a la crecida del mar por los deshielos polares, debido a estar bajo el nivel del mar",
    true,
    7,
    13,
    23,
    16,
    150,
    300,
    370,
    250,
    18,
    17,
    true,
    false,
    true
  )
),
  ciudades.push(
    new Clima(
      "Londres",
      "Reino Unido",
      9,
      "La tierra del big ben, y del té, presenta valores pluviométricos muy inferiores a la de otras capitales europeas pese a su notoria influencia climática oceánica. Sus veranos son aveces insoportablemente calurosos, y los inviernos algo frios, con alguna que otra nevada",
      true,
      6,
      11,
      24,
      16,
      100,
      130,
      240,
      250,
      4,
      18,
      true,
      false,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Paris",
      "Francia",
      10,
      "El clima de París es clima oceánico templado (Cfb) o (también denominado «clima de transición») al encontrarse alejada de la costa. Las precipitaciones son algo abundantes aunque no excesivas, con una media de aproximadamente 636 mm y están repartidas a lo largo de todo el año de forma regular sin tener un destacado mínimo pluviométrico (es decir, una estación seca). Las temperaturas en verano pueden superar los 30 °C ocasionalmente, aunque rara vez se superan los 35 °C; las temperaturas máximas suelen rondar entre los 25 °C y 30 °C y son frecuentes las tormentas.",
      false,
      8,
      13,
      25,
      16,
      150,
      270,
      170,
      150,
      10,
      23,
      true,
      false,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Estocolmo",
      "suecia",
      11,
      "La temperatura media anual de Estocolmo es de alrededor de 7 °C. La temperatura media en enero y febrero es de –3 °C, en julio +17,5 °C. La mayor parte de las precipitaciones cae en verano, siendo julio el mes más lluvioso (172 mm) y marzo el más seco (126 mm). En verano las precipitaciones pueden ser torrenciales, en otoño en cambio se reparten más igualitariamente entre los meses. ",
      true,
      -2,
      5,
      22,
      10,
      150,
      100,
      270,
      150,
      18,
      30,
      true,
      false,
      true
    )
  );
ciudades.push(
  new Clima(
    "Oslo",
    "Noruega",
    12,
    "Oslo se caracteriza por tener un clima continental húmedo, influenciado por el mar (Dfb, según la clasificación climática de Köppen). Los veranos son frescos, con temperaturas máximas diarias de entre 19 y 20 °C de media durante los meses de verano (de junio a agosto), aunque las olas de calor son relativamente frecuentes",
    true,
    0,
    3,
    20,
    10,
    150,
    160,
    270,
    250,
    0,
    26,
    true,
    false,
    false
  )
),
  ciudades.push(
    new Clima(
      "Reikjavik",
      "Islandia",
      13,
      "Pese a su latitud tiene un clima oceánico subpolar. Gracias a la cálida corriente del Atlántico Norte, Reikiavik tiene una temperatura promedio en verano está por debajo de 12 °C, mientras que en enero es de –0,5 °C. En general, Islandia, y en particular, su capital, escapan al calentamiento regional típico de Eurasia, producto de la contaminación atmosférica, y, al no estar su estación meteorológica cerca de una de las islas de calor urbanas, no posee la típica deriva producto de la urbanización",
      true,
      -3,
      2,
      7,
      3,
      150,
      200,
      470,
      250,
      0,
      28,
      true,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Casablanca",
      "Marruecos",
      14,
      "Casablanca tiene un clima mediterráneo (Csa según la clasificación climática de Köppen) fuertemente influenciado por las corrientes frías del océano Atlántico, que tiende a moderar las oscilaciones de temperatura y producir un clima muy suave con poca variación estacional de la temperatura y la falta de calor y fríos extremos. Su ubicación en el borde del océano Atlántico ofrece inviernos suaves y veranos relativamente húmedos y templados, pero sin precipitación. La temperatura media anual es de 18,88 °C, tiene un promedio anual de 72 días con precipitaciones significativas",
      false,
      14,
      15,
      25,
      19,
      50,
      100,
      70,
      50,
      24,
      30,
      false,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Moscu",
      "Rusia",
      15,
      "El clima de la ciudad de Moscú (tipo Dfb) es un buen ejemplo de continentalidad, con el característico invierno ruso, el cual es extenso y muy nevado; el verano es moderado y hay gran amplitud térmica anual; además de poca precipitación como lluvia y nieve, pero persistente a lo largo del año",
      false,
      -1,
      5,
      15,
      9,
      150,
      200,
      170,
      10,
      18,
      true,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Cabo",
      "Sudáfrica",
      16,
      "Clima mediterráneo de veranos suaves con estaciones bien definidas. En el invierno, que va de mayo a agosto, grandes frentes fríos vienen del océano Atlántico con fuertes precipitaciones y vientos del noroeste. Los meses de invierno son frescos, con una temperatura mínima promedio de 10 °C​ La mayor parte de la lluvia de la ciudad cae en invierno, pero debido a la topografía montañosa de la ciudad, las cantidades de lluvia pueden variar espectacularmente para cada área específica.El verano, que va de noviembre a febrero, es suave y seco. La Península recibe frecuentemente vientos fuertes del sudeste, conocidos localmente como los Doctores del Cabo, porque limpian el aire de la contaminación. Este viento es causado por un sistema de alta presión que se origina en el sur atlántico al oeste de Ciudad del Cabo, conocido como el alto sur atlántico. Las temperaturas veraniegas son suaves, con una máxima promedio de 26 °C",
      true,
      28,
      15,
      10,
      19,
      250,
      100,
      270,
      150,
      20,
      18,
      false,
      false,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Tripoli",
      "Libia",
      17,
      "El clima de Trípoli es subtropical semiárido (BSh según la clasificación climática de Köppen),influenciado y marcado por el mar homónimo que baña sus costas y que contrasta con las extremadas temperaturas del sur del país, azotadas por la aridez y temperaturas extremas, por encontrarse en pleno desierto. Los veranos en Trípoli son calurosos y los inviernos suaves",
      true,
      10,
      15,
      25,
      19,
      50,
      100,
      20,
      20,
      20,
      28,
      false,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Niger",
      "Nigeria",
      18,
      "En la zona de la ciudad se distinguen tres estaciones en el año. Esto incluye una cálida y húmeda temporada de lluvias y una estación seca. Entre ellas, hay un intervalo de viento seco llamado harmattan, caracterizado por nubes de arena y sensación de frío y sequedad. La estación lluviosa comienza en abril y termina en octubre, cuando las temperaturas diurnas alcanzan los 28 o 30 °C y las nocturnas descienden hasta los 22 o 23 grados. En la estación seca, las temperaturas pueden subir hasta los 40 °C durante el día, mientras que las nocturnas pueden caer hasta los 12 grados",
      true,
      30,
      25,
      25,
      30,
      250,
      300,
      370,
      350,
      25,
      25,
      false,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Sidney",
      "Australia",
      19,
      "Sídney tiene un clima subtropical húmedo con veranos suaves e inviernos algo fríos, con pocas precipitaciones.​ El clima es moderado por la proximidad al mar, y las temperaturas más extremas se registran en los suburbios occidentales interiores. El mes más caluroso es enero, con una temperatura media de 23 °C,",
      true,
      25,
      15,
      10,
      19,
      350,
      300,
      470,
      350,
      25,
      8,
      false,
      false,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Darwin",
      "Australia",
      20,
      "Darwin tiene un clima tropical de sabana (Aw en la clasificación climática de Köppen) con distintas estaciones húmedas y secas y temperaturas máximas medias similares durante todo el año. La estación seca se extiende desde abril-mayo a octubre (invierno del hemisferio sur), durante el cual casi todos los días son calurosos y soleados, y por la tarde presenta un promedio de humedad de alrededor del 30%, pero varía. Hay muy pocas precipitaciones entre mayo y septiembre. En los meses más fríos de junio y julio la temperatura mínima diaria suele ser de alrededor de 14 °C, pero muy rara vez desciende de esa temperatura. Nunca se han registrado heladas. La estación húmeda está asociada con ciclones tropicales y lluvias monzónicas",
      true,
      30,
      30,
      25,
      29,
      450,
      400,
      570,
      450,
      20,
      18,
      false,
      true,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Bangkok",
      "Tailandia",
      21,
      "Bangkok tiene un Clima tropical de sabana (clasificación climática de Köppen: Aw). La temperatura más alta registrada en la ciudad fue de 40 °C en mayo de 1983, mientras que la más baja registrada tuvo lugar en enero de 1955, cuando se registró 9,9 °C. Las temperaturas más bajas fueron archivadas en los meses de enero de 1924, 1955 y 1974, así como en diciembre de 1999. El año más caluroso en Bangkok fue 1997 (con una media de 30 °C registrados en el aeropuerto Don Mueang) y el más frío fue 1975 (con 26,3 °C). La temperatura diurna más fría fue de 19,9 °C en diciembre de 1992. Las granizadas son algo prácticamente desconocidas en la ciudad, con un solo registro en los últimos cincuenta años",
      true,
      28,
      25,
      28,
      29,
      850,
      600,
      370,
      550,
      20,
      18,
      false,
      true,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Dheli",
      "India",
      22,
      "Delhi tiene un clima subtropical semiárido, con grandes variaciones de temperatura entre el verano y el invierno. El verano largo y muy duro se extiende desde principios de abril hasta octubre. Durante este periodo se produce la estación de las lluvias. Las temperaturas extremas registradas en la ciudad pueden llegar a los –2 °C en invierno y hasta los 47 °C en verano. En esta estación las máximas casi siempre superan los 40 °C",
      false,
      25,
      25,
      25,
      25,
      350,
      350,
      370,
      550,
      28,
      28,
      false,
      true,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Dacca",
      "Bangladesh",
      23,
      "Daca experimenta un clima caluroso, lluvioso y húmedo. La ciudad se encuentra dentro de la zona climática de los monzones. Daca tiene una temperatura media de 25 °C, que varía de 18 °C en enero a 29 °C en agosto.​ Cerca del 80 % de las lluvias, con un promedio de 1854 mm, se producen entre mayo y septiembre",
      true,
      24,
      20,
      25,
      19,
      650,
      700,
      370,
      650,
      20,
      18,
      false,
      true,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Damasco",
      "Siria",
      24,
      " Damasco tiene un clima árido (Köppen: BWk), debido al efecto de sombra orográfica de las montañas anti-Líbano [42] y de las corrientes marinas predominantes. Los veranos son secos y calurosos con menos humedad. Los inviernos son suaves y relativamente lluviosos, con nevadas",
      true,
      8,
      13,
      35,
      19,
      50,
      100,
      70,
      20,
      20,
      30,
      false,
      false,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "NY",
      "EE. UU.",
      25,
      "En Nueva York el clima se puede considerar de transición entre un clima contiental húmedo (Köppen, Dfa) y un clima subtropical húmedo (Köppen, Cfa), tendiendo más al primero.​ resultado de los constantes vientos que traen aire frío desde el interior del continente americano. Nueva York tiene inviernos fríos, pero la ubicación costera de la ciudad mantiene las temperaturas un poco más cálidas que en las regiones interiores, ayudando a moderar la cantidad de nieve, cuya media es de 63,5 a 88,9 cm al año",
      true,
      2,
      15,
      29,
      19,
      350,
      400,
      470,
      200,
      10,
      22,
      true,
      true,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "México",
      "México",
      26,
      "El clima es cálido y templado en Ciudad de México. Los veranos aquí tienen una buena cantidad de lluvia, mientras que los inviernos tienen muy poco. El clima aquí se clasifica como Cwb por el sistema Köppen-Geiger. La temperatura promedio en Ciudad de México es 16.0 °C.",
      false,
      10,
      14,
      25,
      19,
      50,
      100,
      70,
      150,
      22,
      30,
      false,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Rio",
      "Brasil",
      27,
      "El clima es tropical atlántico, monzónico Am/Aw según la clasificación climática de Koppen con veranos cálidos e inviernos tibios. Las temperaturas máximas pueden subir hasta más de 35 grados y ocasionalmente superan los 40 grados en zonas interiores de la ciudad. En las principales zonas turísticas la temperatura se modera por la brisa fresca proveniente del océano. Los meses más calurosos son diciembre y enero. La temperatura máxima registrada fue de 43,8 grados en enero de 1984. Los meses más fríos son junio y julio, normalmente con media de 18-27 °C",
      true,
      32,
      25,
      25,
      29,
      350,
      400,
      270,
      350,
      25,
      20,
      false,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Lima",
      "Peru",
      28,
      " Lima se considera que tiene un clima desértico. A lo largo del año, cayendo casi sin lluvia en Lima. El clima aquí se clasifica como BWh por el sistema Köppen-Geiger. La temperatura promedio en Lima es 18.9 °C.",
      true,
      10,
      15,
      25,
      28,
      10,
      4,
      15,
      25,
      14,
      24,
      false,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "BA",
      "Argentina",
      29,
      "El clima de Buenos Aires es templado pampeano, con veranos calurosos e inviernos fríos. Si bien es húmedo todo el año, las precipitaciones son más abundantes en verano que en invierno.​ Las temperaturas medias anuales de 17,6 °C tornan escasos los días de calor y frío intensos. La humedad relativa promedio es del 71,4%.​El mes más frío es julio, con una temperatura media de 10 °C, con mínimas extremas de -2 a 0 °C. En las zonas suburbanas, las temperaturas pueden descender a -5 °C. Son raras las heladas y las nevadas en el centro de la ciudad debido a dos causas: la gran aglomeración urbana provoca una isla de calor (a pocos km del centro de Buenos Aires la temperatura suele ser de 2 a 5 °C menor) y el hecho que las olas de frío durante el invierno suelan coincidir con el viento llamado pampero el cual por haber atravesado previamente la cordillera de los Andes aunque sopla aún bastante frío ha perdido la mayor parte de su humedad (y posibilidad de producir nevadas) al haberse condensado y precipitado en la cordillera y precordillera andinas; las únicas veces que nevó en el siglo xx fueron en junio de 1918, por la noche, y en 1967 muy leve, pero diurna. El 9 de julio de 2007 se registró la última nevada, un poco más fuerte que la de 1967, pero no tan fuerte como la de 1918",
      false,
      28,
      15,
      10,
      17,
      450,
      300,
      260,
      350,
      20,
      15,
      true,
      false,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Ushuaia",
      "Argentina",
      30,
      "El clima de esta ciudad considerada el fin del mundo, por ser el centro urbano mas meridional del planeta, presenta un clima subpolar con inviernos muy frios y veranos frescos. La nieve abunda la mayoria de los meses desde el otoño hasta el fin de la primavera, aunque no se descartan nevadas en los meses de verano. Su cercania a la costa, de todos modos suaviza un tanto las temperaturas. La humedad es abundante y al encontrarse en una zona del mundo donde el adelgazamiento de la capa de ozono es demasiado pronunciado, es normal que las sensaciones térmicas sean mucho mas elevadas que las temperaturas reales, incluso en invierno",
      true,
      15,
      7,
      3,
      10,
      150,
      100,
      60,
      150,
      20,
      15,
      true,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Bariloche",
      "Argentina",
      31,
      "La ciudad del chocolate esta enclavada en el inicio de la cordillera de los Andes, Las nevadas son muy frecuentes en los meses invernales. Los veranos son bastante agradables aunque las temperaturas minimas pueden llegar a ser muy frias",
      false,
      22,
      12,
      6,
      12,
      150,
      100,
      60,
      150,
      20,
      15,
      true,
      false,
      false
    )
  );

//introducimos el array en formato JSON en el localstorage, luego lo traemos parseado
const ciudadesStringificado = JSON.stringify(ciudades);
localStorage.setItem("ciudadesStringificado", ciudadesStringificado);
const ciudadesSinJSON = JSON.parse(ciudadesStringificado);
localStorage.getItem("ciudadesSinJSON", ciudadesSinJSON);

//llamo por intermedio de un ID un div en el HTML. En el a traves de template literals, voy iterando los datos del array en "tarjetitas." Ademas asocio los metodos del constructor y atraves de un click (utilizacion de eventos) permito determinar que tipo de clima tiene una ciudad
let div = document.getElementById("cartitas");
div.innerHTML = "";
let tempPromedio = "";
let lluviasTotales = "";
for (let i = 0; i < ciudades.length; i++) {
  tempPromedio = ciudades[i].temperaturaPromedio();
  lluviasTotales = ciudades[i].lluviasTotales();
  div.innerHTML =
    div.innerHTML +
    `<div id="${ciudades[i].nombre}" style="border:red 1px solid;  margin:10px;  padding:150px"> <h2>${ciudades[i].nombre}</h2><h3>${ciudades[i].pais}</h3><h4> temperatura de enero: ${ciudades[i].temperaturaEnero}</h4><h4> Temperatura en abril: ${ciudades[i].temperaturaAbril}</h4><h4>Temperatura en julio: ${ciudades[i].temperaturaJulio}</h4><h4> Temperatura en septiembre:${ciudades[i].temperaturaSeptiembre}</h4><h4>Lluvias en enero: ${ciudades[i].lluviaEnero}</h4><h4>Lluvias en abril: ${ciudades[i].lluviaAbril}</h4><h4>Lluvias en julio: ${ciudades[i].lluviaJulio}</h4> <h4>la temperatura promedio es ${tempPromedio}</h4><h4>las lluvias totales son: ${lluviasTotales} mm.</h4><button onClick = "descripcion(${i})">Descripcion climatica</button></div>`;
  console.log(tempPromedio);
}
// en esta funcion uso los metodos. Atraves de ellos determino que tipo de clima es segun que temperatura y lluvias hay en cada caso, esos datos los muestro atraves de manipulacion del DOM, con un boton descripcion climatica, asociado a un evento click(todo esta en el template string anterios, de cada cartita)
function descripcion(i) {
  lluviasTotales = ciudades[i].lluviasTotales();
  tempPromedio = ciudades[i].temperaturaPromedio();
  if ((tempPromedio < 10) & (lluviasTotales < 400)) {
    h2 = document.createElement("h2");
    h2.classList.add("frioSeco");
    h2.innerHTML =
      "ES UN CLIMA FRIO Y SECO; extensas areas del centro de Rusia y Mongolia. Muy escasa vegetación. Muy pocas especies sobreviven a estas condiciones";
    let divConId = document.getElementById(`${ciudades[i].nombre}`);

    divConId.append(h2);
  } else if ((tempPromedio < 10) & (lluviasTotales > 400)) {
    h2 = document.createElement("h2");
    h2 = document.createElement("h2");
    h2.classList.add("frioHumedo");
    h2.innerHTML =
      "ES UN CLIMA FRIO Y HUMEDO; Escandinavia, Canadá, el sur Argentino y areas de Rusia y Alaska. Predominan los bosques compuestos de arces y pinos, y a medido que dismunuye la temperatura se transiciona a la tundra polar";
    let divConId = document.getElementById(`${ciudades[i].nombre}`);

    divConId.append(h2);
  } else if (
    (tempPromedio >= 10) &
    (tempPromedio < 20) &
    (lluviasTotales < 400)
  ) {
    h2 = document.createElement("h2");
    h2.classList.add("templadoSeco");
    h2.innerHTML =
      "ES UN CLIMA TEMPLADO Y SECO; temperaturas moderadas, con escasa precipitaciones. Prevalece la vegetacion baja, casi siempre perenee";
    let divConId = document.getElementById(`${ciudades[i].nombre}`);

    divConId.append(h2);
  } else if (
    (tempPromedio >= 10) &
    (tempPromedio < 20) &
    (lluviasTotales > 400)
  ) {
    h2 = document.createElement("h2");
    h2.classList.add("templadoHumedo");
    h2.innerHTML =
      "ES UN CLIMA TEMPLADO Y HUMEDO; prevalece en zonas costeras de latitudes medias (China, Argentina, Estados Unidos y casi la totalidad de Europa. Prevalece el bosque caducifolio templado (manzanos, arces, tilos, pinos etc)";
    let divConId = document.getElementById(`${ciudades[i].nombre}`);

    divConId.append(h2);
  } else if ((tempPromedio > 20) & (lluviasTotales > 400)) {
    h2 = document.createElement("h2");
    h2.classList.add("calidoHumedo");
    h2.innerHTML =
      "ES UN CLIMA CALIDO Y HUMEDO; caribe y centroamerica, sudeste asiatico y africa subsahariana. Tambien sudamérica. Luvias abundantes y temperaturas qye van de suaves a muy calidas. Las zonas costeras son propensas a ciclones";
    let divConId = document.getElementById(`${ciudades[i].nombre}`);

    divConId.append(h2);
  } else if ((tempPromedio > 20) & (lluviasTotales < 400)) {
    h2 = document.createElement("h2");
    h2.classList.add("calidoSeco");
    h2.innerHTML =
      "ES UN CLIMA CALIDO Y SECO Areas desérticas del centro de Australia, sectores del centro de África, áreas de california y Asia. Muy escasas lluvias y temperaturas en su mayoría extremas";
    let divConId = document.getElementById(`${ciudades[i].nombre}`);

    divConId.append(h2);
  } else "no corresponde a ninguna clasificación climática de Koppen";
}

//Ahora, através de un boton quiero filtrar cuales son las ciudades calientes y frías tanto en julio como en enero. Creo en el DOM un botón, y através de los eventos(click) con un botón llamado frío determino que ciudades son frias, y con un botón llamado cálido, cuales son las ciudades cálidas
//botón cálido (enero)
let divBotonCalido = document.createElement("div");
let h2a = document.createElement("h2");
h2a.innerHTML =
  "Estas ciudades presentan una temperatura superior a 25 grados en enero";
divBotonCalido.append(h2a);
let botonCalido = document.createElement("button");
botonCalido.innerText = "Calido";
botonCalido.classList.add("botonCalor");
divBotonCalido.append(botonCalido);
botonCalido.addEventListener("click", () => {
  const filtradoEnero1 = ciudades.filter((ciudad) => {
    return ciudad.temperaturaEnero > 25;
  });
  let divCalido = document.createElement("div");
  divCalido.innerHTML = "";
  for (let i = 0; i < filtradoEnero1.length; i++) {
    divCalido.innerHTML =
      divCalido.innerHTML +
      ` <div id="calido${[i]}"> <h2>${
        filtradoEnero1[i].nombre
      }</h2> </br> <h4>${filtradoEnero1[i].description}</h4>`;
  }
  let botonRemoverCalor = document.createElement("button");
  botonRemoverCalor.classList.add("botonRemoverCalor");
  botonRemoverCalor.innerHTML = `gracias por la información. remover`;
  divCalido.append(botonRemoverCalor);
  botonRemoverCalor.addEventListener("click", () => {
    divCalido.remove();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Espero que esta info te haya sido útil",
      showConfirmButton: false,
      timer: 1500,
    });
  });
  divBotonCalido.append(divCalido);
});

document.body.appendChild(divBotonCalido);
//boton frio (enero)
let divBotonFrio = document.createElement("div");
let h2b = document.createElement("h2");
h2b.innerHTML =
  "Estas ciudades presentan una temperatura inferior a 7 grados en enero";
divBotonFrio.append(h2b);

let botonFrio = document.createElement("button");
botonFrio.innerText = "frio";
botonFrio.classList.add("botonFrio");
divBotonFrio.append(botonFrio);
document.body.appendChild(divBotonFrio);
botonFrio.addEventListener("click", () => {
  let divFrio = document.createElement("div");
  divBotonFrio.append(divFrio);

  const filtradoEnero1 = ciudades.filter((ciudad) => {
    return ciudad.temperaturaEnero < 7;
  });

  divFrio.innerHTML = "";
  for (let i = 0; i < filtradoEnero1.length; i++) {
    divFrio.innerHTML =
      divFrio.innerHTML +
      ` <div id="frio${[i]}"> <h2>${filtradoEnero1[i].nombre}</h2> </br> <h4>${
        filtradoEnero1[i].description
      }</h4>`;
  }
  let botonRemoverFrio = document.createElement("button");
  botonRemoverFrio.classList.add("botonRemoverFrio");
  botonRemoverFrio.innerHTML = `gracias por la informacion. remover`;
  divFrio.append(botonRemoverFrio);
  botonRemoverFrio.addEventListener("click", () => {
    divFrio.remove();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Espero que esta info te haya sido útil",
      showConfirmButton: false,
      timer: 1500,
    });
  });
});
document.body.appendChild(divBotonFrio);

//boton calido (julio)
let divBotonCalido1 = document.createElement("div");
let h2c = document.createElement("h2");
h2c.innerHTML =
  "Estas ciudades presentan una temperatura superior a 25 grados en julio";
divBotonCalido1.append(h2c);
let botonCalido1 = document.createElement("button");
botonCalido1.innerText = "Calido";
botonCalido1.classList.add("botonCalor");
divBotonCalido1.append(botonCalido1);
botonCalido1.addEventListener("click", () => {
  const filtradoJulio1 = ciudades.filter((ciudad) => {
    return ciudad.temperaturaJulio > 25;
  });
  let divCalido1 = document.createElement("div");
  divCalido1.innerHTML = "";
  for (let i = 0; i < filtradoJulio1.length; i++) {
    divCalido1.innerHTML =
      divCalido1.innerHTML +
      ` <div id="calido${[i]}"> <h2>${
        filtradoJulio1[i].nombre
      }</h2> </br> <h4>${filtradoJulio1[i].description}</h4>`;
  }
  let botonRemoverCalor1 = document.createElement("button");
  botonRemoverCalor1.classList.add("botonRemoverCalor");
  botonRemoverCalor1.innerHTML = `gracias por la informacion. remover`;
  divCalido1.append(botonRemoverCalor1);
  botonRemoverCalor1.addEventListener("click", () => {
    divCalido1.remove();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Espero que esta info te haya sido útil",
      showConfirmButton: false,
      timer: 1500,
    });
  });
  divBotonCalido1.append(divCalido1);
});

document.body.appendChild(divBotonCalido1);
//boton frio(julio)
let divBotonFrio1 = document.createElement("div");
let h2d = document.createElement("h2");
h2d.innerHTML =
  "Estas ciudades presentan una temperatura inferior a 7 grados en julio";
divBotonFrio1.append(h2d);

let botonFrio1 = document.createElement("button");
botonFrio1.innerText = "frio";
botonFrio1.classList.add("botonFrio");
divBotonFrio1.append(botonFrio1);
document.body.appendChild(divBotonFrio1);
botonFrio1.addEventListener("click", () => {
  let divFrio1 = document.createElement("div");
  divBotonFrio1.append(divFrio1);

  const filtradoJulio1 = ciudades.filter((ciudad) => {
    return ciudad.temperaturaJulio < 7;
  });
  console.log(filtradoJulio1);
  divFrio1.innerHTML = "";
  for (let i = 0; i < filtradoJulio1.length; i++) {
    divFrio1.innerHTML =
      divFrio1.innerHTML +
      ` <div id="frio${[i]}"> <h2>${filtradoJulio1[i].nombre}</h2> </br> <h4>${
        filtradoJulio1[i].description
      } </h4>`;
  }
  let botonRemoverFrio1 = document.createElement("button");
  botonRemoverFrio1.classList.add("botonRemoverFrio");
  botonRemoverFrio1.innerHTML = `gracias por la informacion. remover`;
  divFrio1.append(botonRemoverFrio1);
  botonRemoverFrio1.addEventListener("click", () => {
    divFrio1.remove();
    //uso de libreria sweet alert
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Espero que esta info te haya sido útil",
      showConfirmButton: false,
      timer: 1500,
    });
  });
});
document.body.appendChild(divBotonFrio1);
