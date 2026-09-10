const SIGNS = [
  {
    name: "Capricórnio",
    symbol: "♑",
    from: [12, 22],
    to: [1, 19],
    element: "Terra",
    quality: "Cardinal",
    planet: "Saturno",
    color: "#8fb8a8",
    period: "22 de dezembro a 19 de janeiro",
    desc: "Capricórnio é determinado, responsável e paciente. Gosta de metas claras, trabalha com disciplina e constrói as coisas passo a passo. Tem um jeito sério por fora, mas um coração leal por dentro.",
    traits: ["Disciplinado", "Ambicioso", "Prático", "Persistente"]
  },
  {
    name: "Aquário",
    symbol: "♒",
    from: [1, 20],
    to: [2, 18],
    element: "Ar",
    quality: "Fixo",
    planet: "Urano",
    color: "#7ec8e3",
    period: "20 de janeiro a 18 de fevereiro",
    desc: "Aquário é original, curioso e amigo da liberdade. Ama ideias novas, tecnologia e causas que ajudam o mundo. Pensa diferente e gosta de surpreender.",
    traits: ["Criativo", "Independente", "Humanitário", "Inventivo"]
  },
  {
    name: "Peixes",
    symbol: "♓",
    from: [2, 19],
    to: [3, 20],
    element: "Água",
    quality: "Mutável",
    planet: "Netuno",
    color: "#8b9cff",
    period: "19 de fevereiro a 20 de março",
    desc: "Peixes é sonhador, sensível e cheio de imaginação. Entende os sentimentos dos outros com facilidade e se expressa pela arte, pela música e pela gentileza.",
    traits: ["Empático", "Artístico", "Intuitivo", "Gentil"]
  },
  {
    name: "Áries",
    symbol: "♈",
    from: [3, 21],
    to: [4, 19],
    element: "Fogo",
    quality: "Cardinal",
    planet: "Marte",
    color: "#ff7a59",
    period: "21 de março a 19 de abril",
    desc: "Áries é corajoso, energético e gosta de começar coisas novas. Age rápido, enfrenta desafios de frente e inspira os outros com sua coragem.",
    traits: ["Corajoso", "Iniciativa", "Animado", "Direto"]
  },
  {
    name: "Touro",
    symbol: "♉",
    from: [4, 20],
    to: [5, 20],
    element: "Terra",
    quality: "Fixo",
    planet: "Vênus",
    color: "#7dce82",
    period: "20 de abril a 20 de maio",
    desc: "Touro é estável, paciente e valoriza o conforto. Gosta do que é bonito e duradouro, é leal com os amigos e prefere construir com calma.",
    traits: ["Confiável", "Paciente", "Sensível", "Constante"]
  },
  {
    name: "Gêmeos",
    symbol: "♊",
    from: [5, 21],
    to: [6, 20],
    element: "Ar",
    quality: "Mutável",
    planet: "Mercúrio",
    color: "#f0d35e",
    period: "21 de maio a 20 de junho",
    desc: "Gêmeos é comunicativo, esperto e versátil. Adora conversar, aprender e trocar ideias. Tem uma mente rápida e um humor leve.",
    traits: ["Curioso", "Comunicativo", "Ágil", "Divertido"]
  },
  {
    name: "Câncer",
    symbol: "♋",
    from: [6, 21],
    to: [7, 22],
    element: "Água",
    quality: "Cardinal",
    planet: "Lua",
    color: "#9ec9ff",
    period: "21 de junho a 22 de julho",
    desc: "Câncer é protetor, carinhoso e ligado à família. Sente as coisas com profundidade e cria um ambiente aconchegante para quem ama.",
    traits: ["Protetor", "Acolhedor", "Intuitivo", "Leal"]
  },
  {
    name: "Leão",
    symbol: "♌",
    from: [7, 23],
    to: [8, 22],
    element: "Fogo",
    quality: "Fixo",
    planet: "Sol",
    color: "#ffb347",
    period: "23 de julho a 22 de agosto",
    desc: "Leão é criativo, generoso e brilha naturalmente. Gosta de se expressar, liderar com o coração e celebrar as pessoas ao redor.",
    traits: ["Confiante", "Generoso", "Criativo", "Brilhante"]
  },
  {
    name: "Virgem",
    symbol: "♍",
    from: [8, 23],
    to: [9, 22],
    element: "Terra",
    quality: "Mutável",
    planet: "Mercúrio",
    color: "#a8d5a2",
    period: "23 de agosto a 22 de setembro",
    desc: "Virgem é organizado, atento aos detalhes e gosta de ajudar de forma prática. Observa tudo com cuidado e busca melhorar o que está ao seu alcance.",
    traits: ["Analítico", "Prestativo", "Cuidadoso", "Inteligente"]
  },
  {
    name: "Libra",
    symbol: "♎",
    from: [9, 23],
    to: [10, 22],
    element: "Ar",
    quality: "Cardinal",
    planet: "Vênus",
    color: "#f4a4c0",
    period: "23 de setembro a 22 de outubro",
    desc: "Libra busca harmonia, beleza e justiça. É diplomático, educado e tem talento para unir pessoas e encontrar o equilíbrio.",
    traits: ["Diplomático", "Elegante", "Justo", "Sociável"]
  },
  {
    name: "Escorpião",
    symbol: "♏",
    from: [10, 23],
    to: [11, 21],
    element: "Água",
    quality: "Fixo",
    planet: "Plutão",
    color: "#c97bff",
    period: "23 de outubro a 21 de novembro",
    desc: "Escorpião é intenso, perspicaz e determinado. Vai fundo no que interessa, é leal e tem uma força interior impressionante.",
    traits: ["Intenso", "Focado", "Misterioso", "Corajoso"]
  },
  {
    name: "Sagitário",
    symbol: "♐",
    from: [11, 22],
    to: [12, 21],
    element: "Fogo",
    quality: "Mutável",
    planet: "Júpiter",
    color: "#ff8a5b",
    period: "22 de novembro a 21 de dezembro",
    desc: "Sagitário é aventureiro, otimista e ama aprender. Quer explorar o mundo, contar histórias e viver com liberdade e bom humor.",
    traits: ["Aventureiro", "Otimista", "Honesto", "Explorador"]
  }
];

function inRange(month, day, from, to) {
  const value = month * 100 + day;
  const start = from[0] * 100 + from[1];
  const end = to[0] * 100 + to[1];

  if (start <= end) {
    return value >= start && value <= end;
  }
  return value >= start || value <= end;
}

function getSign(month, day) {
  return SIGNS.find((sign) => inRange(month, day, sign.from, sign.to));
}

function renderSign(sign) {
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.innerHTML = `
    <article class="sign-card" style="--accent: ${sign.color}">
      <div class="symbol">${sign.symbol}</div>
      <h2 class="sign-name">${sign.name}</h2>
      <p class="period">${sign.period}</p>
      <div class="chips">
        <span class="chip">Elemento: ${sign.element}</span>
        <span class="chip">Qualidade: ${sign.quality}</span>
        <span class="chip">Planeta: ${sign.planet}</span>
      </div>
      <p class="desc">${sign.desc}</p>
      <div class="traits">
        ${sign.traits.map((t) => `<span class="trait">${t}</span>`).join("")}
      </div>
    </article>
  `;
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function showError(message) {
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.innerHTML = `<p class="error">${message}</p>`;
}

document.getElementById("discover-btn").addEventListener("click", () => {
  const value = document.getElementById("birthdate").value;
  if (!value) {
    showError("Escolha uma data para descobrir o signo.");
    return;
  }
  const date = new Date(`${value}T00:00:00`);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const sign = getSign(month, day);
  if (!sign) {
    showError("Não foi possível identificar o signo. Tente outra data.");
    return;
  }
  renderSign(sign);
});

document.getElementById("birthdate").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.getElementById("discover-btn").click();
  }
});