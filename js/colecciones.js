const textos = {
  A: "el mejor de la línea",
  B: "de la mejor calidad",
  C: "es barato, barato, barato",
};

let productos = document.getElementById("productos");
for (const letra in textos) {
  productos.innerHTML += `
    <p class="fs-5 font-monospace text-success" style="cursor: pointer;">
      <span id="producto" class="pe-auto">Producto ${letra}</span>
    </p>
  `;
}

const texto = document.getElementById("texto");

productos = document.querySelectorAll("#producto");
productos.forEach((producto) => {
  producto.addEventListener("mouseenter", () => {
    const p = producto.innerText.split(" ")[1];
    texto.innerText = `Este producto es ${textos[p]}`;
  });
  producto.addEventListener("mouseleave", () => {
    texto.innerText = "¡Queremos que compre!";
  });
});
