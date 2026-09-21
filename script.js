// ===============================
// PERSONALIZA ESTAS 3 VARIABLES
// ===============================
const NOMBRE = "Mi persona especial";
const FECHA_INICIO = "2025-09-07T00:00:00";
const MENSAJE = "Que nunca te falten motivos para sonreír,<br>ni flores para recordarte lo especial que eres. 🌼";

// Texto de la página
document.title = `Flores amarillas para ${NOMBRE} 💛`;
document.querySelector("h1").textContent = `Flores amarillas para ${NOMBRE} 💛`;
document.querySelector(".message").innerHTML = MENSAJE;

// Contador
const counter = document.getElementById("counter");

function updateCounter() {
  const start = new Date(FECHA_INICIO);
  const now = new Date();

  if (Number.isNaN(start.getTime())) {
    counter.textContent = "Revisa la fecha en script.js";
    return;
  }

  let diff = Math.max(0, now - start);

  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  counter.textContent =
    `${days} días · ${String(hours).padStart(2, "0")} h · ` +
    `${String(minutes).padStart(2, "0")} min · ${String(secs).padStart(2, "0")} s`;
}

updateCounter();
setInterval(updateCounter, 1000);

// Pétalos flotando
const petals = document.getElementById("petals");

function createPetal() {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = Math.random() > .5 ? "🌼" : "✿";
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.setProperty("--drift", `${(Math.random() - .5) * 180}px`);
  petal.style.animationDuration = `${4 + Math.random() * 4}s`;
  petal.style.fontSize = `${12 + Math.random() * 12}px`;
  petals.appendChild(petal);

  setTimeout(() => petal.remove(), 8500);
}

let petalTimer = setInterval(createPetal, 700);
for (let i = 0; i < 12; i++) setTimeout(createPetal, i * 180);

// Reiniciar animación visual
document.getElementById("replay").addEventListener("click", () => {
  document.querySelectorAll(".heart-flower, .leaf, .branch, .trunk").forEach(el => {
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
  });
});
