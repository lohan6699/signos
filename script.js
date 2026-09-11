const SIGNS = [
  { name: "Áries", symbol: "♈", from: [3, 21], to: [4, 19], house: "1ª Casa do Santuário", saint: "Mu de Áries", cloth: "Armadura de Ouro do Carneiro", element: "Fogo", planet: "Marte", color: "#ff8a5b", period: "21 de março a 19 de abril", tech: "Muralha de Cristal", desc: "Na primeira Casa do Santuário, o Carneiro guarda a entrada com um cosmo calmo e poderoso. Quem nasce em Áries desperta coragem, iniciativa e a força de quem dá o primeiro passo na jornada.", traits: ["Corajoso", "Iniciativa", "Protetor", "Determinado"], armor: "aries" },
  { name: "Touro", symbol: "♉", from: [4, 20], to: [5, 20], house: "2ª Casa do Santuário", saint: "Aldebaran de Touro", cloth: "Armadura de Ouro do Touro", element: "Terra", planet: "Vênus", color: "#e6c36a", period: "20 de abril a 20 de maio", tech: "Grande Chifre", desc: "A Casa de Touro é sólida como uma muralha. O cosmo daqui é estável, leal e imenso. Quem nasce neste signo tem paciência de titã e força para proteger os amigos.", traits: ["Forte", "Leal", "Paciente", "Constante"], armor: "taurus" },
  { name: "Gêmeos", symbol: "♊", from: [5, 21], to: [6, 20], house: "3ª Casa do Santuário", saint: "Saga de Gêmeos", cloth: "Armadura de Ouro dos Gêmeos", element: "Ar", planet: "Mercúrio", color: "#c9b6ff", period: "21 de maio a 20 de junho", tech: "Outra Dimensão", desc: "A Casa de Gêmeos é misteriosa e cheia de caminhos. O cosmo daqui é rápido, inteligente e surpreendente. Quem nasce neste signo pensa longe e encontra saídas onde os outros não veem.", traits: ["Astuto", "Versátil", "Comunicativo", "Estratégico"], armor: "gemini" },
  { name: "Câncer", symbol: "♋", from: [6, 21], to: [7, 22], house: "4ª Casa do Santuário", saint: "Máscara da Morte de Câncer", cloth: "Armadura de Ouro do Caranguejo", element: "Água", planet: "Lua", color: "#9ec9ff", period: "21 de junho a 22 de julho", tech: "Ondas do Espírito", desc: "Sob a luz da Lua, a Casa de Câncer guarda sentimentos profundos. O cosmo daqui protege o lar e as pessoas queridas com uma intuição muito forte.", traits: ["Protetor", "Intuitivo", "Acolhedor", "Leal"], armor: "cancer" },
  { name: "Leão", symbol: "♌", from: [7, 23], to: [8, 22], house: "5ª Casa do Santuário", saint: "Aiolia de Leão", cloth: "Armadura de Ouro do Leão", element: "Fogo", planet: "Sol", color: "#ffb347", period: "23 de julho a 22 de agosto", tech: "Relâmpago de Plasma", desc: "A Casa de Leão brilha como o Sol. O cosmo daqui é nobre, quente e valente. Quem nasce neste signo lidera com o coração e defende Atena com orgulho.", traits: ["Nobre", "Brilhante", "Valente", "Generoso"], armor: "leo" },
  { name: "Virgem", symbol: "♍", from: [8, 23], to: [9, 22], house: "6ª Casa do Santuário", saint: "Shaka de Virgem", cloth: "Armadura de Ouro da Virgem", element: "Terra", planet: "Mercúrio", color: "#d4e39a", period: "23 de agosto a 22 de setembro", tech: "Tesouro do Céu", desc: "A Casa de Virgem é silenciosa e sagrada. O cosmo daqui é puro, concentrado e cheio de sabedoria. Quem nasce neste signo observa tudo com calma e age com precisão.", traits: ["Sábio", "Calmo", "Preciso", "Justo"], armor: "virgo" },
  { name: "Libra", symbol: "♎", from: [9, 23], to: [10, 22], house: "7ª Casa do Santuário", saint: "Dohko de Libra", cloth: "Armadura de Ouro da Balança", element: "Ar", planet: "Vênus", color: "#f4c4a0", period: "23 de setembro a 22 de outubro", tech: "Armas da Balança", desc: "A Casa de Libra guarda o equilíbrio do Santuário. O cosmo daqui busca justiça, harmonia e o momento certo de agir. Quem nasce neste signo une força e sabedoria.", traits: ["Justo", "Equilibrado", "Diplomático", "Sábio"], armor: "libra" },
  { name: "Escorpião", symbol: "♏", from: [10, 23], to: [11, 21], house: "8ª Casa do Santuário", saint: "Milo de Escorpião", cloth: "Armadura de Ouro do Escorpião", element: "Água", planet: "Plutão", color: "#e06b8a", period: "23 de outubro a 21 de novembro", tech: "Agulha Escarlate", desc: "A Casa de Escorpião é intensa e precisa. O cosmo daqui vai direto ao ponto, com honra e foco. Quem nasce neste signo tem determinação afiada e lealdade profunda.", traits: ["Intenso", "Honrado", "Focado", "Corajoso"], armor: "scorpio" },
  { name: "Sagitário", symbol: "♐", from: [11, 22], to: [12, 21], house: "9ª Casa do Santuário", saint: "Aiolos de Sagitário", cloth: "Armadura de Ouro do Arqueiro", element: "Fogo", planet: "Júpiter", color: "#ff9a4a", period: "22 de novembro a 21 de dezembro", tech: "Flecha de Sagitário", desc: "A Casa de Sagitário aponta para o horizonte. O cosmo daqui é livre, otimista e protetor. Quem nasce neste signo luta pelas causas justas e nunca perde a esperança.", traits: ["Livre", "Otimista", "Protetor", "Aventureiro"], armor: "sagittarius" },
  { name: "Capricórnio", symbol: "♑", from: [12, 22], to: [1, 19], house: "10ª Casa do Santuário", saint: "Shura de Capricórnio", cloth: "Armadura de Ouro da Cabra", element: "Terra", planet: "Saturno", color: "#b8d4c8", period: "22 de dezembro a 19 de janeiro", tech: "Excalibur", desc: "A Casa de Capricórnio é disciplina pura. O cosmo daqui corta dúvidas e constrói caminhos. Quem nasce neste signo sobe montanhas com persistência e honra.", traits: ["Disciplinado", "Honrado", "Persistente", "Firme"], armor: "capricorn" },
  { name: "Aquário", symbol: "♒", from: [1, 20], to: [2, 18], house: "11ª Casa do Santuário", saint: "Camus de Aquário", cloth: "Armadura de Ouro do Aquário", element: "Ar", planet: "Urano", color: "#7ec8e3", period: "20 de janeiro a 18 de fevereiro", tech: "Pó de Diamante", desc: "A Casa de Aquário congela o tempo com elegância. O cosmo daqui é frio por fora e enorme por dentro. Quem nasce neste signo é original, leal e pensa no bem de todos.", traits: ["Elegante", "Original", "Leal", "Visionário"], armor: "aquarius" },
  { name: "Peixes", symbol: "♓", from: [2, 19], to: [3, 20], house: "12ª Casa do Santuário", saint: "Afrodite de Peixes", cloth: "Armadura de Ouro dos Peixes", element: "Água", planet: "Netuno", color: "#e59ad4", period: "19 de fevereiro a 20 de março", tech: "Rosas Encantadas", desc: "A última Casa é um jardim diante da Câmara de Atena. O cosmo de Peixes é belo, sensível e poderoso. Quem nasce neste signo sente o mundo com a alma e protege com gentileza.", traits: ["Sensível", "Artístico", "Gentil", "Intuitivo"], armor: "pisces" }
];

const GOLD = '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff6c8"/><stop offset=".45" stop-color="#e8c56a"/><stop offset="1" stop-color="#8a5910"/></linearGradient></defs>';

const ARMORS = {
  aries: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M28 86c-8-38 18-62 42-48 10 22 16 34 20 46 10-18 18-40 22-62 4 22 12 44 22 62 4-12 10-24 20-46 24-14 50 10 42 48-6 26-24 40-42 46v18c20 10 34 28 38 52H32c4-24 18-42 38-52v-18C52 126 34 112 28 86Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M78 102h44" stroke="#5a3a08" stroke-width="2"/><circle cx="100" cy="118" r="10" fill="#2a1a00"/><path d="M70 70c8 16 10 28 8 40M130 70c-8 16-10 28-8 40" stroke="#5a3a08" stroke-width="2"/></svg>`,
  taurus: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M22 90c0-40 28-64 56-48 10 16 16 28 18 40 4-18 12-34 22-52 10 18 18 34 22 52 2-12 8-24 18-40 28-16 56 8 56 48-2 24-18 40-38 48v20c22 10 38 28 42 54H18c4-26 20-44 42-54v-20C40 130 24 114 22 90Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M58 68c-24-30-50-12-40 24" stroke="#5a3a08" stroke-width="5" fill="none"/><path d="M142 68c24-30 50-12 40 24" stroke="#5a3a08" stroke-width="5" fill="none"/><circle cx="100" cy="120" r="10" fill="#2a1a00"/></svg>`,
  gemini: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<rect x="26" y="40" width="64" height="138" rx="24" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><rect x="110" y="40" width="64" height="138" rx="24" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><circle cx="58" cy="88" r="9" fill="#2a1a00"/><circle cx="142" cy="88" r="9" fill="#2a1a00"/><path d="M90 108h20" stroke="#5a3a08" stroke-width="4"/><path d="M42 128h32M126 128h32" stroke="#5a3a08" stroke-width="2"/><path d="M48 154c8 10 20 10 28 0M124 154c8 10 20 10 28 0" stroke="#5a3a08" stroke-width="2"/></svg>`,
  cancer: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<ellipse cx="100" cy="126" rx="58" ry="44" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M50 96c-28-36-2-64 28-46M150 96c28-36 2-64-28-46" stroke="url(#g)" stroke-width="12" stroke-linecap="round"/><circle cx="80" cy="124" r="8" fill="#2a1a00"/><circle cx="120" cy="124" r="8" fill="#2a1a00"/><path d="M88 148h24" stroke="#5a3a08" stroke-width="2"/></svg>`,
  leo: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M100 28l12 22 24-8-8 24 22 12-22 12 8 24-24-8-12 22-12-22-24 8 8-24-22-12 22-12-8-24 24 8z" fill="url(#g)" stroke="#5a3a08"/><circle cx="100" cy="114" r="38" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M86 108c4 8 24 8 28 0" stroke="#5a3a08" stroke-width="2"/><circle cx="100" cy="118" r="10" fill="#2a1a00"/></svg>`,
  virgo: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M100 26c28 22 40 48 40 78 0 46-22 80-40 98-18-18-40-52-40-98 0-30 12-56 40-78Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M100 64v102" stroke="#5a3a08" stroke-width="2"/><circle cx="100" cy="94" r="9" fill="#2a1a00"/><path d="M84 142c10 12 22 12 32 0" stroke="#5a3a08" stroke-width="2"/></svg>`,
  libra: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<circle cx="100" cy="58" r="16" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M100 74v40" stroke="url(#g)" stroke-width="8"/><path d="M38 114h124" stroke="url(#g)" stroke-width="8"/><circle cx="48" cy="148" r="26" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><circle cx="152" cy="148" r="26" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M74 182h52" stroke="url(#g)" stroke-width="6"/></svg>`,
  scorpio: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M42 116c0-34 26-56 58-56s46 14 46 34-14 28-32 32c26 4 46 20 46 44 0 26-26 40-54 40" stroke="url(#g)" stroke-width="13" fill="none" stroke-linecap="round"/><path d="M106 206l28-12-8 28" fill="url(#g)" stroke="#5a3a08"/><circle cx="76" cy="86" r="9" fill="#2a1a00"/><path d="M58 70l-16-18M70 62l-6-22" stroke="url(#g)" stroke-width="5" stroke-linecap="round"/></svg>`,
  sagittarius: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<circle cx="78" cy="128" r="36" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M52 156L156 42" stroke="url(#g)" stroke-width="8"/><path d="M122 42h36v36" stroke="url(#g)" stroke-width="8"/><path d="M62 146l-18 32 32-16" fill="url(#g)" stroke="#5a3a08"/><circle cx="78" cy="128" r="9" fill="#2a1a00"/></svg>`,
  capricorn: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M62 68c-12-34 12-50 34-40 6 16 8 26 10 36 16-20 46-18 50 16 4 32-22 52-46 58 20 8 40 30 36 56H58c2-24 12-42 30-52-24-10-40-34-26-74Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M78 48c-18-24-40-8-28 22" stroke="#5a3a08" stroke-width="3" fill="none"/><circle cx="96" cy="108" r="9" fill="#2a1a00"/></svg>`,
  aquarius: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M68 36h64l14 40H54L68 36Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M78 76v42c0 30 44 30 44 0V76" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><circle cx="100" cy="92" r="8" fill="#2a1a00"/><path d="M52 150c18-14 28-14 48 0s30 14 48 0" stroke="url(#g)" stroke-width="8" fill="none"/><path d="M52 174c18-14 28-14 48 0s30 14 48 0" stroke="url(#g)" stroke-width="8" fill="none"/></svg>`,
  pisces: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M30 62c36 12 54 34 60 56-22 10-48 8-60-8-10-12-10-34 0-48Z" fill="url(#g)" stroke="#5a3a08"/><path d="M170 158c-36-12-54-34-60-56 22-10 48-8 60 8 10 12 10 34 0 48Z" fill="url(#g)" stroke="#5a3a08"/><path d="M84 116h32" stroke="#5a3a08" stroke-width="4"/><path d="M100 70v80" stroke="url(#g)" stroke-width="4"/><circle cx="100" cy="116" r="7" fill="#2a1a00"/></svg>`
};

function inRange(month, day, from, to) {
  const value = month * 100 + day;
  const start = from[0] * 100 + from[1];
  const end = to[0] * 100 + to[1];
  if (start <= end) return value >= start && value <= end;
  return value >= start || value <= end;
}

function getSign(month, day) {
  return SIGNS.find((sign) => inRange(month, day, sign.from, sign.to));
}

function highlightHouse(armor) {
  document.querySelectorAll(".house-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.sign === armor);
  });
}

function renderSign(sign) {
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.innerHTML = `
    <article class="sign-card" style="--accent: ${sign.color}">
      <span class="corner tl"></span><span class="corner tr"></span>
      <span class="corner bl"></span><span class="corner br"></span>
      <p class="house-tag">${sign.house}</p>
      <div class="armor-stage">
        <div class="armor-glow"></div>
        <div class="armor">${ARMORS[sign.armor]}</div>
        <div class="pedestal"></div>
      </div>
      <h2 class="sign-name">${sign.symbol} ${sign.name}</h2>
      <p class="saint">${sign.saint}</p>
      <p class="period">${sign.cloth} · ${sign.period}</p>
      <div class="chips">
        <span class="chip">Elemento: ${sign.element}</span>
        <span class="chip">Planeta: ${sign.planet}</span>
      </div>
      <p class="desc">${sign.desc}</p>
      <p class="tech">Técnica do cosmo: ${sign.tech}</p>
      <div class="traits">${sign.traits.map((t) => `<span class="trait">${t}</span>`).join("")}</div>
      <div class="actions">
        <button type="button" class="again" id="again-btn">Consultar outra data</button>
      </div>
    </article>
  `;
  highlightHouse(sign.armor);
  result.scrollIntoView({ behavior: "smooth", block: "center" });
  document.getElementById("again-btn").addEventListener("click", resetOracle);
}

function showError(message) {
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.innerHTML = `<p class="error">${message}</p>`;
  highlightHouse(null);
}

function resetOracle() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("awakening").classList.add("hidden");
  highlightHouse(null);
  document.getElementById("birthdate").focus();
}

function awaken(sign) {
  const awakening = document.getElementById("awakening");
  const result = document.getElementById("result");
  result.classList.add("hidden");
  awakening.classList.remove("hidden");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const delay = reduce ? 0 : 900;
  window.setTimeout(() => {
    awakening.classList.add("hidden");
    renderSign(sign);
  }, delay);
}

function discoverFromDate() {
  const value = document.getElementById("birthdate").value;
  if (!value) {
    showError("Escolha uma data para despertar o cosmo.");
    return;
  }
  const date = new Date(value + "T00:00:00");
  const sign = getSign(date.getMonth() + 1, date.getDate());
  if (!sign) {
    showError("O oráculo não encontrou essa Casa. Tente outra data.");
    return;
  }
  awaken(sign);
}

document.getElementById("discover-btn").addEventListener("click", discoverFromDate);

document.getElementById("birthdate").addEventListener("keydown", (event) => {
  if (event.key === "Enter") discoverFromDate();
});

document.querySelectorAll(".house-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const sign = SIGNS.find((item) => item.armor === btn.dataset.sign);
    if (sign) awaken(sign);
  });
});