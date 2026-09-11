const SIGNS = [
  { name: "Áries", symbol: "♈", from: [3, 21], to: [4, 19], house: "1ª Casa do Santuário", saint: "Cavaleiro de Ouro de Áries", cloth: "Armadura de Ouro do Carneiro", element: "Fogo", planet: "Marte", color: "#ff8a5b", period: "21 de março a 19 de abril", tech: "Muralha de Cristal", desc: "Na primeira Casa do Santuário, o Carneiro guarda a entrada com um cosmo calmo e poderoso. Quem nasce em Áries desperta coragem, iniciativa e a força de quem dá o primeiro passo na jornada.", traits: ["Corajoso", "Iniciativa", "Protetor", "Determinado"], armor: "aries" },
  { name: "Touro", symbol: "♉", from: [4, 20], to: [5, 20], house: "2ª Casa do Santuário", saint: "Cavaleiro de Ouro de Touro", cloth: "Armadura de Ouro do Touro", element: "Terra", planet: "Vênus", color: "#e6c36a", period: "20 de abril a 20 de maio", tech: "Grande Chifre", desc: "A Casa de Touro é sólida como uma muralha. O cosmo daqui é estável, leal e imenso. Quem nasce neste signo tem paciência de titã e força para proteger os amigos.", traits: ["Forte", "Leal", "Paciente", "Constante"], armor: "taurus" },
  { name: "Gêmeos", symbol: "♊", from: [5, 21], to: [6, 20], house: "3ª Casa do Santuário", saint: "Cavaleiro de Ouro de Gêmeos", cloth: "Armadura de Ouro dos Gêmeos", element: "Ar", planet: "Mercúrio", color: "#c9b6ff", period: "21 de maio a 20 de junho", tech: "Outra Dimensão", desc: "A Casa de Gêmeos é misteriosa e cheia de caminhos. O cosmo daqui é rápido, inteligente e surpreendente. Quem nasce neste signo pensa longe e encontra saídas onde os outros não veem.", traits: ["Astuto", "Versátil", "Comunicativo", "Estratégico"], armor: "gemini" },
  { name: "Câncer", symbol: "♋", from: [6, 21], to: [7, 22], house: "4ª Casa do Santuário", saint: "Cavaleiro de Ouro de Câncer", cloth: "Armadura de Ouro do Caranguejo", element: "Água", planet: "Lua", color: "#9ec9ff", period: "21 de junho a 22 de julho", tech: "Ondas do Espírito", desc: "Sob a luz da Lua, a Casa de Câncer guarda sentimentos profundos. O cosmo daqui protege o lar e as pessoas queridas com uma intuição muito forte.", traits: ["Protetor", "Intuitivo", "Acolhedor", "Leal"], armor: "cancer" },
  { name: "Leão", symbol: "♌", from: [7, 23], to: [8, 22], house: "5ª Casa do Santuário", saint: "Cavaleiro de Ouro de Leão", cloth: "Armadura de Ouro do Leão", element: "Fogo", planet: "Sol", color: "#ffb347", period: "23 de julho a 22 de agosto", tech: "Relâmpago de Plasma", desc: "A Casa de Leão brilha como o Sol. O cosmo daqui é nobre, quente e valente. Quem nasce neste signo lidera com o coração e defende Atena com orgulho.", traits: ["Nobre", "Brilhante", "Valente", "Generoso"], armor: "leo" },
  { name: "Virgem", symbol: "♍", from: [8, 23], to: [9, 22], house: "6ª Casa do Santuário", saint: "Cavaleiro de Ouro de Virgem", cloth: "Armadura de Ouro da Virgem", element: "Terra", planet: "Mercúrio", color: "#d4e39a", period: "23 de agosto a 22 de setembro", tech: "Tesouro do Céu", desc: "A Casa de Virgem é silenciosa e sagrada. O cosmo daqui é puro, concentrado e cheio de sabedoria. Quem nasce neste signo observa tudo com calma e age com precisão.", traits: ["Sábio", "Calmo", "Preciso", "Justo"], armor: "virgo" },
  { name: "Libra", symbol: "♎", from: [9, 23], to: [10, 22], house: "7ª Casa do Santuário", saint: "Cavaleiro de Ouro de Libra", cloth: "Armadura de Ouro da Balança", element: "Ar", planet: "Vênus", color: "#f4c4a0", period: "23 de setembro a 22 de outubro", tech: "Armas da Balança", desc: "A Casa de Libra guarda o equilíbrio do Santuário. O cosmo daqui busca justiça, harmonia e o momento certo de agir. Quem nasce neste signo une força e sabedoria.", traits: ["Justo", "Equilibrado", "Diplomático", "Sábio"], armor: "libra" },
  { name: "Escorpião", symbol: "♏", from: [10, 23], to: [11, 21], house: "8ª Casa do Santuário", saint: "Cavaleiro de Ouro de Escorpião", cloth: "Armadura de Ouro do Escorpião", element: "Água", planet: "Plutão", color: "#e06b8a", period: "23 de outubro a 21 de novembro", tech: "Agulha Escarlate", desc: "A Casa de Escorpião é intensa e precisa. O cosmo daqui vai direto ao ponto, com honra e foco. Quem nasce neste signo tem determinação afiada e lealdade profunda.", traits: ["Intenso", "Honrado", "Focado", "Corajoso"], armor: "scorpio" },
  { name: "Sagitário", symbol: "♐", from: [11, 22], to: [12, 21], house: "9ª Casa do Santuário", saint: "Cavaleiro de Ouro de Sagitário", cloth: "Armadura de Ouro do Arqueiro", element: "Fogo", planet: "Júpiter", color: "#ff9a4a", period: "22 de novembro a 21 de dezembro", tech: "Flecha de Sagitário", desc: "A Casa de Sagitário aponta para o horizonte. O cosmo daqui é livre, otimista e protetor. Quem nasce neste signo luta pelas causas justas e nunca perde a esperança.", traits: ["Livre", "Otimista", "Protetor", "Aventureiro"], armor: "sagittarius" },
  { name: "Capricórnio", symbol: "♑", from: [12, 22], to: [1, 19], house: "10ª Casa do Santuário", saint: "Cavaleiro de Ouro de Capricórnio", cloth: "Armadura de Ouro da Cabra", element: "Terra", planet: "Saturno", color: "#b8d4c8", period: "22 de dezembro a 19 de janeiro", tech: "Excalibur", desc: "A Casa de Capricórnio é disciplina pura. O cosmo daqui corta dúvidas e constrói caminhos. Quem nasce neste signo sobe montanhas com persistência e honra.", traits: ["Disciplinado", "Honrado", "Persistente", "Firme"], armor: "capricorn" },
  { name: "Aquário", symbol: "♒", from: [1, 20], to: [2, 18], house: "11ª Casa do Santuário", saint: "Cavaleiro de Ouro de Aquário", cloth: "Armadura de Ouro do Aquário", element: "Ar", planet: "Urano", color: "#7ec8e3", period: "20 de janeiro a 18 de fevereiro", tech: "Pó de Diamante", desc: "A Casa de Aquário congela o tempo com elegância. O cosmo daqui é frio por fora e enorme por dentro. Quem nasce neste signo é original, leal e pensa no bem de todos.", traits: ["Elegante", "Original", "Leal", "Visionário"], armor: "aquarius" },
  { name: "Peixes", symbol: "♓", from: [2, 19], to: [3, 20], house: "12ª Casa do Santuário", saint: "Cavaleiro de Ouro de Peixes", cloth: "Armadura de Ouro dos Peixes", element: "Água", planet: "Netuno", color: "#e59ad4", period: "19 de fevereiro a 20 de março", tech: "Rosas do Jardim", desc: "A última Casa é um jardim diante da Câmara de Atena. O cosmo de Peixes é belo, sensível e poderoso. Quem nasce neste signo sente o mundo com a alma e protege com gentileza.", traits: ["Sensivel", "Artístico", "Gentil", "Intuitivo"], armor: "pisces" }
];

const GOLD = '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff3c2"/><stop offset=".5" stop-color="#e6c36a"/><stop offset="1" stop-color="#8a5a12"/></linearGradient></defs>';

const ARMORS = {
  aries: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M40 92c-18-28-8-62 22-70 12 22 20 34 38 42 18-8 26-20 38-42 30 8 40 42 22 70-8 14-22 24-38 28v18c22 8 36 24 40 46H38c4-22 18-38 40-46V120c-16-4-30-14-38-28Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><circle cx="100" cy="108" r="10" fill="#2a1a00"/></svg>`,
  taurus: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M36 78c-4-34 22-58 48-46 8 18 12 28 16 36 0-8 8-18 16-36 26-12 52 12 48 46-2 18-14 32-30 40v22c24 10 40 28 44 52H22c4-24 20-42 44-52V118C50 110 38 96 36 78Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M70 70c-18-22-38-10-34 16" stroke="#5a3a08" stroke-width="4" fill="none"/><path d="M130 70c18-22 38-10 34 16" stroke="#5a3a08" stroke-width="4" fill="none"/><circle cx="100" cy="112" r="9" fill="#2a1a00"/></svg>`,
  gemini: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<rect x="34" y="46" width="56" height="128" rx="18" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><rect x="110" y="46" width="56" height="128" rx="18" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><circle cx="62" cy="92" r="8" fill="#2a1a00"/><circle cx="138" cy="92" r="8" fill="#2a1a00"/><path d="M90 110h20" stroke="#5a3a08" stroke-width="4"/></svg>`,
  cancer: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<ellipse cx="100" cy="118" rx="52" ry="40" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M58 92c-22-28-4-52 20-40M142 92c22-28 4-52-20-40" stroke="url(#g)" stroke-width="10" stroke-linecap="round"/><circle cx="82" cy="116" r="7" fill="#2a1a00"/><circle cx="118" cy="116" r="7" fill="#2a1a00"/></svg>`,
  leo: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<circle cx="100" cy="108" r="46" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M100 40l8 18 20-6-6 20 18 8-18 8 6 20-20-6-8 18-8-18-20 6 6-20-18-8 18-8-6-20 20 6z" fill="url(#g)" stroke="#5a3a08"/><circle cx="100" cy="108" r="10" fill="#2a1a00"/></svg>`,
  virgo: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M100 36c22 18 34 40 34 66 0 40-20 70-34 86-14-16-34-46-34-86 0-26 12-48 34-66Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M100 70v86" stroke="#5a3a08" stroke-width="2"/><circle cx="100" cy="96" r="8" fill="#2a1a00"/></svg>`,
  libra: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M100 44v52" stroke="url(#g)" stroke-width="8"/><path d="M46 96h108" stroke="url(#g)" stroke-width="8"/><circle cx="52" cy="132" r="22" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><circle cx="148" cy="132" r="22" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/></svg>`,
  scorpio: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M48 120c0-28 22-48 52-48s40 12 40 28-10 24-28 28c22 4 40 18 40 38 0 22-22 34-46 34" stroke="url(#g)" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M106 198l24-10-8 26" fill="url(#g)" stroke="#5a3a08"/><circle cx="78" cy="92" r="8" fill="#2a1a00"/></svg>`,
  sagittarius: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M48 150L150 48" stroke="url(#g)" stroke-width="8"/><path d="M118 48h32v32" stroke="url(#g)" stroke-width="8"/><path d="M60 138l-16 28 28-16" fill="url(#g)" stroke="#5a3a08"/><circle cx="100" cy="100" r="10" fill="#2a1a00"/></svg>`,
  capricorn: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M70 70c-10-28 8-44 28-36 6 16 8 24 10 34 14-18 40-16 44 12 4 30-18 48-40 54 18 8 34 28 30 52H64c2-22 12-38 28-48-22-10-36-30-22-68Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><circle cx="96" cy="108" r="8" fill="#2a1a00"/></svg>`,
  aquarius: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M70 46h60l12 34H58L70 46Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M80 80v36c0 28 40 28 40 0V80" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M60 150c16-12 24-12 40 0s24 12 40 0" stroke="url(#g)" stroke-width="8" fill="none"/><path d="M60 172c16-12 24-12 40 0s24 12 40 0" stroke="url(#g)" stroke-width="8" fill="none"/></svg>`,
  pisces: `<svg viewBox="0 0 200 220" fill="none">${GOLD}<path d="M40 70c28 10 44 28 50 48-18 8-38 8-50-6-8-10-8-28 0-42Z" fill="url(#g)" stroke="#5a3a08"/><path d="M160 150c-28-10-44-28-50-48 18-8 38-8 50 6 8 10 8 28 0 42Z" fill="url(#g)" stroke="#5a3a08"/><path d="M90 118h20" stroke="#5a3a08" stroke-width="4"/></svg>`
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

function renderSign(sign) {
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.innerHTML = `
    <article class="sign-card" style="--accent: ${sign.color}">
      <p class="house-tag">${sign.house}</p>
      <div class="armor">${ARMORS[sign.armor]}</div>
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
    </article>
  `;
}

function showError(message) {
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.innerHTML = `<p class="error">${message}</p>`;
}

document.getElementById("discover-btn").addEventListener("click", () => {
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
  renderSign(sign);
});