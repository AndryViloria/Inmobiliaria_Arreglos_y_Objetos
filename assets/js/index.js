const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];


const cargarGaleria = (data) => {
  let galeria = "";
  for (const propiedad of data) {
    const template = `
      <div class="propiedad tarjeta">
        <div
          class="img"
          style="
            background-image: url('${propiedad.src}');
          "
        ></div>
        <section>
          <h5>${propiedad.name}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
          </div>
          <p class="my-3">${propiedad.description}</p>
          <button class="btn btn-info">Ver más</button>
        </section>
      </div>
      `;

    galeria += template;
  }

  const galeriaPropiedades = document.getElementById("galeria-propiedades");
  galeriaPropiedades.innerHTML = galeria;
};

const mostrarTotal = (total) => {
  const spanTotal = document.getElementById("total");
  spanTotal.innerHTML = total;
};

const filtrar = () => {
  const campoCuartos = document.getElementById("cuartos").value;
  const cantidadMinima = document.getElementById("m-min").value;
  const cantidadMaxima = document.getElementById("m-max").value;

  if (!campoCuartos || !cantidadMinima || !cantidadMaxima) {
    alert("Todos los campos son requeridos");
    return;
  }

  const filtrado = [];
  for (let propiedad of propiedadesJSON) {
    if (
      propiedad.rooms <= Number(campoCuartos) &&
      propiedad.m >= Number(cantidadMinima) &&
      propiedad.m <= Number(cantidadMaxima)
    ) {
      filtrado.push(propiedad);
    }
  }

  return filtrado;
};

const init = () => {
  // CARGA ELEMENTOS POR DEFECTOS
  cargarGaleria(propiedadesJSON);
  mostrarTotal(propiedadesJSON.length);

  // ASOCIA UN EVENTO AL BOTON BUSCAR
  const btnBuscar = document.getElementById("buscar");
  btnBuscar.addEventListener("click", () => {
    const filtrado = filtrar();
    if (filtrado) {
      cargarGaleria(filtrado);
      mostrarTotal(filtrado.length);
    }
  });
};

init();
