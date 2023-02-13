const imagen = document.getElementById("silueta");
const btn_i = document.getElementById("izquierda");
const btn_d = document.getElementById("derecha");
const situar = document.getElementById("situar");

// Posición inicial
imagen.style.left = "50px";
imagen.style.transition = "all 0.3s ease-in-out";

// Izquierda
btn_i.addEventListener("click", () => {
  imagen.style.transform = "scaleX(-1)";
  const pos = Number(imagen.style.left.split("px")[0]) - 200;
  if (imagen.offsetLeft - imagen.offsetWidth - 200 >= 10) {
    imagen.style.left = pos + "px";
  } else imagen.style.left = "0px";
});

// Derecha
btn_d.addEventListener("click", () => {
  imagen.style.transform = "scaleX(1)";
  const pos = Number(imagen.style.left.split("px")[0]) + 200;
  if (imagen.offsetLeft + imagen.offsetWidth + 200 <= window.innerWidth) {
    imagen.style.left = pos + "px";
  } else imagen.style.left = window.innerWidth - imagen.offsetWidth + "px";
});

window.addEventListener("resize", () => {
  if (imagen.offsetLeft + imagen.offsetWidth > window.innerWidth) {
    imagen.style.left = window.innerWidth - imagen.offsetWidth + "px";
  }
});

situar.addEventListener("click", () => {
  imagen.style.left = "50px";
  imagen.style.transform = "scaleX(1)";
});
