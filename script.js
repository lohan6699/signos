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

const GOLD = '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff8d2"/><stop offset=".45" stop-color="#ecc86a"/><stop offset="1" stop-color="#8a5910"/></linearGradient><linearGradient id="h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>';

const ARMORS = {
  aries: `<svg viewBox="0 0 200 220" fill="none" role="img" aria-label="Armadura de Áries">${GOLD}<path d="M26 84c-8-40 20-64 44-48 10 22 16 34 20 46 10-18 18-42 22-64 4 22 12 46 22 64 4-12 10-24 20-46 24-16 52 8 44 48-6 28-24 42-42 48v18c20 10 34 28 38 54H30c4-26 18-44 38-54v-18C50 126 32 112 26 84Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M70 62c10 18 12 32 8 48M130 62c-10 18-12 32-8 48" stroke="#5a3a08" stroke-width="2"/><ellipse cx="92" cy="92" rx="18" ry="10" fill="url(#h)"/><circle cx="100" cy="118" r="10" fill="#2a1a00"/></svg>`,
  taurus: `<svg viewBox="0 0 200 220" fill="none" role="img" aria-label="Armadura de Touro">${GOLD}<path d="M20 88c0-42 30-66 58-48 10 16 16 28 18 40 4-18 12-34 22-54 10 20 18 36 22 54 2-12 8-24 18-40 28-18 58 6 58 48-2 26-18 42-38 50v20c22 10 38 28 42 56H16c4-28 20-46 42-56v-20C38 130 22 114 20 88Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M56 66c-26-32-54-12-42 26" stroke="#5a3a08" stroke-width="5" fill="none"/><path d="M144 66c26-32 54-12 42 26" stroke="#5a3a08" stroke-width="5" fill="none"/><ellipse cx="88" cy="96" rx="22" ry="12" fill="url(#h)"/><circle cx="100" cy="120" r="10" fill="#2a1a00"/></svg>`,
  gemini: `<svg viewBox="0 0 200 220" fill="none" role="img" aria-label="Armadura de Gêmeos">${GOLD}<rect x="24" y="38" width="66" height="142" rx="26" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><rect x="110" y="38" width="66" height="142" rx="26" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><ellipse cx="48" cy="70" rx="16" ry="10" fill="url(#h)"/><ellipse cx="134" cy="70" rx="16" ry="10" fill="url(#h)"/><circle cx="57" cy="88" r="9" fill="#2a1a00"/><circle cx="143" cy="88" r="9" fill="#2a1a00"/><path d="M90 108h20M40 130h34M126 130h34" stroke="#5a3a08" stroke-width="3"/><path d="M46 156c8 12 22 12 32 0M124 156c8 12 22 12 32 0" stroke="#5a3a08" stroke-width="2"/></svg>`,
  cancer: `<svg viewBox="0 0 200 220" fill="none" role="img" aria-label="Armadura de Câncer">${GOLD}<ellipse cx="100" cy="128" rx="60" ry="46" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M48 94c-30-38-2-68 30-48M152 94c30-38 2-68-30-48" stroke="url(#g)" stroke-width="13" stroke-linecap="round"/><ellipse cx="84" cy="112" rx="20" ry="12" fill="url(#h)"/><circle cx="80" cy="126" r="8" fill="#2a1a00"/><circle cx="120" cy="126" r="8" fill="#2a1a00"/></svg>`,
  leo: `<svg viewBox="0 0 200 220" fill="none" role="img" aria-label="Armadura de Leão">${GOLD}<path d="M100 24l13 23 26-8-9 25 24 13-24 13 9 25-26-8-13 23-13-23-26 8 9-25-24-13 24-13-9-25 26 8z" fill="url(#g)" stroke="#5a3a08"/><circle cx="100" cy="116" r="40" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><ellipse cx="88" cy="100" rx="16" ry="10" fill="url(#h)"/><path d="M84 110c6 10 26 10 32 0" stroke="#5a3a08" stroke-width="2"/><circle cx="100" cy="120" r="10" fill="#2a1a00"/></svg>`,
  virgo: `<svg viewBox="0 0 200 220" fill="none" role="img" aria-label="Armadura de Virgem">${GOLD}<path d="M100 22c30 22 42 50 42 82 0 48-24 84-42 102-18-18-42-54-42-102 0-32 12-60 42-82Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><ellipse cx="90" cy="70" rx="16" ry="12" fill="url(#h)"/><path d="M100 62v108" stroke="#5a3a08" stroke-width="2"/><circle cx="100" cy="94" r="9" fill="#2a1a00"/><path d="M82 146c12 14 24 14 36 0" stroke="#5a3a08" stroke-width="2"/></svg>`,
  libra: `<svg viewBox="0 0 200 220" fill="none" role="img" aria-label="Armadura de Libra">${GOLD}<circle cx="100" cy="54" r="18" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M100 72v42" stroke="url(#g)" stroke-width="9"/><path d="M34 114h132" stroke="url(#g)" stroke-width="9"/><circle cx="46" cy="150" r="28" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><circle cx="154" cy="150" r="28" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><ellipse cx="40" cy="140" rx="10" ry="7" fill="url(#h)"/><path d="M72 186h56" stroke="url(#g)" stroke-width="7"/></svg>`,
  scorpio: `<svg viewBox="0 0 200 220" fill="none" role="img" aria-label="Armadura de Escorpião">${GOLD}<path d="M40 114c0-36 28-58 60-58s48 14 48 36-14 30-34 34c28 4 48 20 48 46 0 28-28 42-56 42" stroke="url(#g)" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M106 208l30-12-8 30" fill="url(#g)" stroke="#5a3a08"/><path d="M56 68l-18-20M70 60l-8-24" stroke="url(#g)" stroke-width="5" stroke-linecap="round"/><circle cx="76" cy="84" r="9" fill="#2a1a00"/></svg>`,
  sagittarius: `<svg viewBox="0 0 200 220" fill="none" role="img" aria-label="Armadura de Sagitário">${GOLD}<circle cx="76" cy="130" r="38" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M50 158L160 38" stroke="url(#g)" stroke-width="9"/><path d="M124 38h38v38" stroke="url(#g)" stroke-width="9"/><path d="M60 148l-18 34 34-16" fill="url(#g)" stroke="#5a3a08"/><ellipse cx="68" cy="118" rx="12" ry="8" fill="url(#h)"/><circle cx="76" cy="130" r="9" fill="#2a1a00"/></svg>`,
  capricorn: `<svg viewBox="0 0 200 220" fill="none" role="img" aria-label="Armadura de Capricórnio">${GOLD}<path d="M60 66c-12-36 14-52 36-42 6 16 8 26 10 36 16-20 48-18 52 16 4 34-24 54-48 60 22 8 42 30 38 58H56c2-26 12-44 32-54-26-10-42-36-28-74Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M76 46c-20-26-44-8-30 24" stroke="#5a3a08" stroke-width="3" fill="none"/><ellipse cx="86" cy="88" rx="14" ry="9" fill="url(#h)"/><circle cx="96" cy="108" r="9" fill="#2a1a00"/></svg>`,
  aquarius: `<svg viewBox="0 0 200 220" fill="none" role="img" aria-label="Armadura de Aquário">${GOLD}<path d="M66 32h68l16 42H50L66 32Z" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><path d="M76 74v44c0 32 48 32 48 0V74" fill="url(#g)" stroke="#5a3a08" stroke-width="2"/><ellipse cx="90" cy="48" rx="16" ry="8" fill="url(#h)"/><circle cx="100" cy="92" r="8" fill="#2a1a00"/><path d="M50 150c20-14 30-14 50 0s32 14 50 0" stroke="url(#g)" stroke-width="8" fill="none"/><path d="M50 174c20-14 30-14 50 0s32 14 50 0" stroke="url(#g)" stroke-width="8" fill="none"/></svg>`,
  pisces: `<svg viewBox="0 0 200 220" fill="none" role="img" aria-label="Armadura de Peixes">${GOLD}<path d="M28 60c38 12 56 36 62 58-24 10-50 8-62-8-10-12-10-36 0-50Z" fill="url(#g)" stroke="#5a3a08"/><path d="M172 160c-38-12-56-36-62-58 24-10 50-8 62 8 10 12 10 36 0 50Z" fill="url(#g)" stroke="#5a3a08"/><path d="M82 116h36M100 68v80" stroke="url(#g)" stroke-width="4"/><ellipse cx="48" cy="72" rx="12" ry="7" fill="url(#h)"/><circle cx="100" cy="116" r="7" fill="#2a1a00"/></svg>`
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

// Parses "YYYY-MM-DD" without relying on the Date constructor's timezone
// handling, and tolerates a manually-typed fallback input (e.g. on browsers
// without a native date picker).
function parseISODate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || "");
  if (!match) return null;
  const month = parseInt(match[2], 10);
  const day = parseInt(match[3], 10);
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  return { month, day };
}

function highlightHouse(armor) {
  document.querySelectorAll(".house-btn").forEach((btn) => {
    const isActive = btn.dataset.sign === armor;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

function renderSign(sign) {
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.innerHTML = `
    <article class="sign-card" style="--accent: ${sign.color}">
      <span class="meander" aria-hidden="true"></span>
      <span class="corner tl" aria-hidden="true"></span><span class="corner tr" aria-hidden="true"></span>
      <span class="corner bl" aria-hidden="true"></span><span class="corner br" aria-hidden="true"></span>
      <p class="house-tag">${sign.house}</p>
      <div class="armor-stage">
        <div class="armor-glow" aria-hidden="true"></div>
        <div class="sparks" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
        <div class="armor">${ARMORS[sign.armor]}</div>
        <div class="pedestal" aria-hidden="true"></div>
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
        <button type="button" class="share" id="share-btn">Copiar resultado</button>
      </div>
    </article>
  `;
  highlightHouse(sign.armor);
  result.scrollIntoView({ behavior: "smooth", block: "center" });
  result.focus();

  document.getElementById("again-btn").addEventListener("click", resetOracle);

  const shareBtn = document.getElementById("share-btn");
  shareBtn.addEventListener("click", () => {
    const text = `${sign.symbol} ${sign.name} — ${sign.house} · ${sign.saint} (${sign.cloth})`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          shareBtn.textContent = "Copiado!";
          window.setTimeout(() => { shareBtn.textContent = "Copiar resultado"; }, 1800);
        })
        .catch(() => {
          shareBtn.textContent = "Não foi possível copiar";
          window.setTimeout(() => { shareBtn.textContent = "Copiar resultado"; }, 1800);
        });
    } else {
      shareBtn.textContent = "Cópia indisponível";
      window.setTimeout(() => { shareBtn.textContent = "Copiar resultado"; }, 1800);
    }
  });
}

function showError(message) {
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.innerHTML = `<p class="error">${message}</p>`;
  highlightHouse(null);
  result.focus();
}

function resetOracle() {
  const result = document.getElementById("result");
  result.classList.add("hidden");
  result.innerHTML = "";
  document.getElementById("awakening").classList.add("hidden");
  highlightHouse(null);
  const birthdate = document.getElementById("birthdate");
  birthdate.value = "";
  try {
    localStorage.removeItem("santuario:lastBirthdate");
  } catch (e) {
    /* private browsing or storage disabled — safe to ignore */
  }
  birthdate.focus();
}

function awaken(sign) {
  const awakening = document.getElementById("awakening");
  const result = document.getElementById("result");
  result.classList.add("hidden");
  awakening.classList.remove("hidden");
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const delay = reduce ? 0 : 950;
  window.setTimeout(() => {
    awakening.classList.add("hidden");
    renderSign(sign);
  }, delay);
}

function discoverFromDate() {
  const value = document.getElementById("birthdate").value;
  const parsed = parseISODate(value);
  if (!parsed) {
    showError("Escolha uma data válida para despertar o cosmo.");
    return;
  }
  const sign = getSign(parsed.month, parsed.day);
  if (!sign) {
    showError("O oráculo não encontrou essa Casa. Tente outra data.");
    return;
  }
  try {
    localStorage.setItem("santuario:lastBirthdate", value);
  } catch (e) {
    /* private browsing or storage disabled — safe to ignore */
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

// Restore the last consulted date, per-viewer convenience only.
try {
  const last = localStorage.getItem("santuario:lastBirthdate");
  if (last && parseISODate(last)) {
    document.getElementById("birthdate").value = last;
  }
} catch (e) {
  /* private browsing or storage disabled — safe to ignore */
}