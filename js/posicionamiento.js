const datos_img = {
  yasd: {
    ext: "gif",
    texto: "Yasd",
    url: "https://www.youtube.com/watch?v=UdztftsoybQ",
  },
  menua: {
    ext: "jpg",
    texto: "Servicios",
    url: "https://www.youtube.com/watch?v=5OGecDW-5Xs",
  },
  menub: {
    ext: "jpg",
    texto: "Sitios",
    url: "https://www.youtube.com/watch?v=H9aC5AGY9YU",
  },
  menuc: {
    ext: "jpg",
    texto: "Pruebas",
    url: "https://www.youtube.com/watch?v=PezKEXjswLA",
  },
  menud: {
    ext: "jpg",
    texto: "Ejemplos",
    url: "https://www.youtube.com/watch?v=lPfGKERDr6g",
  },
};

const imagenes = document.getElementById("imagenes");
for (const d in datos_img) {
  imagenes.innerHTML += `
  <div class="image" onclick="window.open('${datos_img[d].url}')">
    <img src="../images/${d}.${datos_img[d].ext}" alt="${d}" />
    <span class="esquina text-white fs-2">${datos_img[d].texto}</span>
  </div>`;
}
