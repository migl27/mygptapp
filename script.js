// Calculadora simples de substrato para cogumelos.
// As regras abaixo podem ser ajustadas facilmente.

const FORM = document.getElementById("mix-form");
const RESULTS = document.getElementById("results");

const BAG_WEIGHT_KG = 3; // Peso de cada saco de substrato final.
const FLOUR_RATIO = 0.12; // 12% da matéria seca.
const PELLET_RATIO = 0.88; // 88% da matéria seca.

const formatKg = (value) => `${value.toFixed(2)} kg`;
const formatLiters = (value) => `${value.toFixed(2)} L`;

const renderResults = ({
  totalWeight,
  waterWeight,
  dryMatter,
  pellets,
  flour,
}) => {
  RESULTS.innerHTML = "";

  const items = [
    `Peso total do substrato: ${formatKg(totalWeight)}`,
    `Quantidade total de água: ${formatKg(waterWeight)} (${formatLiters(
      waterWeight
    )})`,
    `Matéria seca total: ${formatKg(dryMatter)}`,
    `Quantidade total de pellets: ${formatKg(pellets)}`,
    `Quantidade total de farinha de trigo: ${formatKg(flour)}`,
  ];

  items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    RESULTS.appendChild(li);
  });
};

FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  const humidityPercent = Number(document.getElementById("humidity").value);
  const bagCount = Number(document.getElementById("bags").value);

  // Peso total do substrato (sacos × 3 kg).
  const totalWeight = bagCount * BAG_WEIGHT_KG;

  // Humidade convertida para fração.
  const humidityFraction = humidityPercent / 100;

  // Água total baseada na humidade escolhida.
  const waterWeight = totalWeight * humidityFraction;

  // Matéria seca total.
  const dryMatter = totalWeight - waterWeight;

  // Quantidade de pellets e farinha.
  const pellets = dryMatter * PELLET_RATIO;
  const flour = dryMatter * FLOUR_RATIO;

  renderResults({ totalWeight, waterWeight, dryMatter, pellets, flour });
});

// Inicializa com os valores padrão.
FORM.dispatchEvent(new Event("submit"));
