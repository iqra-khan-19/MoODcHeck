const CLICK_SOUND = "pop.mp3";
const RESULT_SOUND = "duhh.mp3";

const SOUNDS_START_VOLUME = 0.8;
const SAVE_MOOD_HISTORY = true;

const THEMES = {
  normal: { accent: "#3b6fb6" },
  night: { accent: "#6ea8fe" },
  cute: { accent: "#e0629b" },
};

const QUESTIONS = [
  {
    text: "How did you wake up today?",
    answers: [
      {
        label: "Ready to take on the world",
        emoji: "🚀",
        col: "#ff8a3d",
        e: 2,
        j: 1,
        c: 0,
        h: 0,
      },
      {
        label: "Smooth and slow",
        emoji: "🌤️",
        col: "#6bf5d0",
        e: 0,
        j: 1,
        c: 2,
        h: 1,
      },
      {
        label: "Snoozed five times",
        emoji: "😴",
        col: "#8a7bd9",
        e: -2,
        j: -1,
        c: 0,
        h: 0,
      },
      {
        label: "Already worried",
        emoji: "😰",
        col: "#b34bff",
        e: 1,
        j: -1,
        c: -2,
        h: -1,
      },
      {
        label: "Grateful for a new day",
        emoji: "🌅",
        col: "#ffb86b",
        e: 1,
        j: 2,
        c: 1,
        h: 2,
      },
      {
        label: "Heavy, did not sleep well",
        emoji: "🌑",
        col: "#5d6b8a",
        e: -2,
        j: -2,
        c: -1,
        h: -1,
      },
    ],
  },
  {
    text: "What food or drink matches you right now?",
    answers: [
      {
        label: "Something sweet",
        hint: "cake, mithai, baklava, mochi",
        emoji: "🍰",
        col: "#ff7ac6",
        e: 0,
        j: 2,
        c: 1,
        h: 1,
      },
      {
        label: "Strong coffee or chai",
        hint: "espresso, chai, mate",
        emoji: "☕",
        col: "#ff5a36",
        e: 2,
        j: 0,
        c: -1,
        h: 0,
      },
      {
        label: "Warm tea or soup",
        hint: "green tea, broth, kahwa",
        emoji: "🍵",
        col: "#5bd68a",
        e: -1,
        j: 1,
        c: 2,
        h: 1,
      },
      {
        label: "A home-cooked meal",
        hint: "rice, curry, pasta, tacos",
        emoji: "🍲",
        col: "#ffa94d",
        e: 0,
        j: 1,
        c: 1,
        h: 2,
      },
      {
        label: "Fresh fruit",
        hint: "mango, watermelon, dates",
        emoji: "🍉",
        col: "#ff6b6b",
        e: 1,
        j: 1,
        c: 1,
        h: 0,
      },
      {
        label: "Nothing, not hungry",
        emoji: "😶",
        col: "#6f7a99",
        e: -1,
        j: -2,
        c: -1,
        h: -1,
      },
    ],
  },
  {
    text: "Choose weather for your mind",
    answers: [
      {
        label: "Bright sunshine",
        emoji: "☀️",
        col: "#ffd23d",
        e: 1,
        j: 2,
        c: 1,
        h: 1,
      },
      {
        label: "Thunderstorm",
        emoji: "⛈️",
        col: "#7a4dff",
        e: 2,
        j: -1,
        c: -2,
        h: -1,
      },
      {
        label: "Soft rain",
        emoji: "🌧️",
        col: "#4a8dff",
        e: -1,
        j: -1,
        c: 1,
        h: 0,
      },
      {
        label: "Gentle breeze",
        emoji: "🍃",
        col: "#4de3c4",
        e: 0,
        j: 1,
        c: 2,
        h: 1,
      },
      {
        label: "Quiet snow",
        emoji: "❄️",
        col: "#a8d8ff",
        e: -1,
        j: 0,
        c: 2,
        h: 0,
      },
      {
        label: "Warm sunset",
        emoji: "🌇",
        col: "#ff9a76",
        e: 0,
        j: 1,
        c: 2,
        h: 1,
      },
    ],
  },
  {
    text: "Pick a music vibe",
    answers: [
      {
        label: "Party beat",
        hint: "pop, bhangra, afrobeats, reggaeton",
        emoji: "🎉",
        col: "#ff3d9a",
        e: 2,
        j: 2,
        c: -1,
        h: 1,
      },
      {
        label: "Lo-fi chill",
        hint: "soft, slow, instrumental",
        emoji: "🎧",
        col: "#5ec8ff",
        e: -1,
        j: 1,
        c: 2,
        h: 0,
      },
      {
        label: "Slow emotional song",
        hint: "ballad, ghazal, blues, fado",
        emoji: "🎻",
        col: "#3d5bd9",
        e: -1,
        j: -2,
        c: 0,
        h: -1,
      },
      {
        label: "Loud and angry",
        hint: "rock, metal, drill",
        emoji: "🎸",
        col: "#ff2d3d",
        e: 2,
        j: -2,
        c: -2,
        h: -2,
      },
      {
        label: "Folk or traditional",
        hint: "qawwali, flamenco, gamelan, folk",
        emoji: "🪕",
        col: "#e0a458",
        e: 1,
        j: 1,
        c: 1,
        h: 2,
      },
      {
        label: "Spiritual or devotional",
        hint: "hymns, nasheed, kirtan, chants",
        emoji: "🕊️",
        col: "#f4d58d",
        e: 0,
        j: 1,
        c: 2,
        h: 2,
      },
    ],
  },
  {
    text: "Your to-do list feels like...",
    answers: [
      {
        label: "A fun game",
        emoji: "🎮",
        col: "#c4ff3d",
        e: 2,
        j: 2,
        c: 0,
        h: 0,
      },
      {
        label: "A mountain",
        emoji: "🏔️",
        col: "#9a5bff",
        e: -1,
        j: -1,
        c: -2,
        h: -1,
      },
      {
        label: "Just a list",
        emoji: "📝",
        col: "#ffd9a0",
        e: 0,
        j: 0,
        c: 1,
        h: 0,
      },
      {
        label: "I'd rather nap",
        emoji: "🛌",
        col: "#a89bd9",
        e: -2,
        j: 0,
        c: 1,
        h: 0,
      },
      {
        label: "A team effort",
        emoji: "🤝",
        col: "#ffa07a",
        e: 1,
        j: 1,
        c: 0,
        h: 2,
      },
      {
        label: "Almost finished",
        emoji: "✅",
        col: "#5ae9a2",
        e: 1,
        j: 2,
        c: 1,
        h: 0,
      },
    ],
  },
  {
    text: "Who do you want to be around right now?",
    answers: [
      {
        label: "My friends",
        emoji: "🥳",
        col: "#ff9ecb",
        e: 1,
        j: 2,
        c: 0,
        h: 2,
      },
      {
        label: "My family or community",
        hint: "parents, elders, neighbours, team",
        emoji: "🏡",
        col: "#ffcf9e",
        e: 0,
        j: 1,
        c: 1,
        h: 2,
      },
      {
        label: "Someone who gets me",
        emoji: "🫶",
        col: "#ffb3a7",
        e: 0,
        j: 1,
        c: 1,
        h: 2,
      },
      {
        label: "A pet or nature",
        hint: "a pet, a park, mountains, the sea",
        emoji: "🌿",
        col: "#58d68d",
        e: -1,
        j: 1,
        c: 2,
        h: 1,
      },
      {
        label: "Just me and my thoughts",
        emoji: "🌙",
        col: "#7c83ff",
        e: -1,
        j: 0,
        c: 2,
        h: -1,
      },
      {
        label: "Nobody, leave me alone",
        emoji: "🚪",
        col: "#8d99ae",
        e: 0,
        j: -1,
        c: -1,
        h: -2,
      },
    ],
  },
  {
    text: "You get a free hour. You...",
    answers: [
      {
        label: "Build something new",
        emoji: "🛠️",
        col: "#19c3ff",
        e: 2,
        j: 1,
        c: 0,
        h: 0,
      },
      {
        label: "Draw, write or make music",
        emoji: "🎨",
        col: "#d4ff3a",
        e: 1,
        j: 2,
        c: 1,
        h: 1,
      },
      {
        label: "Move your body",
        hint: "walk, sport, dance, yoga",
        emoji: "🏃",
        col: "#ff9f43",
        e: 2,
        j: 2,
        c: 1,
        h: 0,
      },
      {
        label: "Reflect quietly",
        hint: "prayer, meditation, quiet time",
        emoji: "🕯️",
        col: "#c9a6ff",
        e: -1,
        j: 1,
        c: 2,
        h: 1,
      },
      {
        label: "Call or thank someone",
        emoji: "💌",
        col: "#7ae582",
        e: 0,
        j: 1,
        c: 1,
        h: 2,
      },
      {
        label: "Rest or stare at the ceiling",
        emoji: "🛏️",
        col: "#9a8bd9",
        e: -2,
        j: -1,
        c: 0,
        h: -1,
      },
    ],
  },
];

const NONE_OPTION = {
  label: "None of these fit me",
  hint: "That's okay. Skip this one.",
  emoji: "🤷",
  col: "#b8bfc9",
  e: 0,
  j: 0,
  c: 0,
  h: 0,
  skip: true,
};

const MOODS = {
  happy: {
    name: "Happy",
    emoji: "😊",
    color: "#f2a900",
    t: [4, 8, 3, 5],
    desc: "You're in a good place today.",
    tip: "Share it. Send someone a kind message.",
    quotes: [
      [
        "Happiness is not something ready made. It comes from your own actions.",
        "Dalai Lama",
      ],
      ["Happiness depends upon ourselves.", "Aristotle"],
    ],
  },
  energetic: {
    name: "Energetic",
    emoji: "⚡",
    color: "#e8590c",
    t: [8, 4, -2, 1],
    desc: "You have a lot of energy right now.",
    tip: "Use it on one important task for 25 minutes.",
    quotes: [
      ["Energy and persistence conquer all things.", "Benjamin Franklin"],
      [
        "Nothing great was ever achieved without enthusiasm.",
        "Ralph Waldo Emerson",
      ],
    ],
  },
  calm: {
    name: "Calm",
    emoji: "😌",
    color: "#2a9d8f",
    t: [-2, 3, 8, 2],
    desc: "Things feel steady and quiet.",
    tip: "Keep the pace slow and drink some water.",
    quotes: [
      ["Nature does not hurry, yet everything is accomplished.", "Lao Tzu"],
      ["Peace begins with a smile.", "Mother Teresa"],
      ["Peace comes from within. Do not seek it without.", "Buddha"],
    ],
  },
  sad: {
    name: "Sad",
    emoji: "😢",
    color: "#3b6fb6",
    t: [-3, -8, -1, -3],
    care: true,
    desc: "Today feels heavy.",
    tip: "Be gentle with yourself. Rest, eat something warm, and let the feeling be there.",
    quotes: [
      ["This too shall pass.", "Persian proverb"],
      ["Even the darkest night will end and the sun will rise.", "Victor Hugo"],
      [
        "Although the world is full of suffering, it is full also of the overcoming of it.",
        "Helen Keller",
      ],
      ["Don't grieve. Anything you lose comes round in another form.", "Rumi"],
      ["Indeed, with hardship comes ease.", "Quran 94:6"],
    ],
  },
  stressed: {
    name: "Stressed",
    emoji: "😣",
    color: "#7b5ea7",
    t: [4, -4, -8, -2],
    care: true,
    desc: "There is a lot on your mind.",
    tip: "Breathe out slowly, then pick just one small thing to do.",
    quotes: [
      ["Nothing can bring you peace but yourself.", "Ralph Waldo Emerson"],
      ["You have power over your mind, not outside events.", "Marcus Aurelius"],
      ["Fall seven times, stand up eight.", "Japanese proverb"],
    ],
  },
  tired: {
    name: "Tired",
    emoji: "😴",
    color: "#7f86a5",
    t: [-8, -2, 2, 0],
    desc: "Your body needs a break.",
    tip: "Take a real break. Even ten minutes helps.",
    quotes: [
      ["Rest is not idleness.", "John Lubbock"],
      [
        "Almost everything will work again if you unplug it for a few minutes, including you.",
        "Anne Lamott",
      ],
    ],
  },
  balanced: {
    name: "Balanced",
    emoji: "🙂",
    color: "#5f7a8a",
    t: [0, 0, 0, 0],
    desc: "Not too high and not too low.",
    tip: "A steady day is a good time to start a small habit.",
    quotes: [
      ["The secret of getting ahead is getting started.", "Mark Twain"],
      ["Well done is better than well said.", "Benjamin Franklin"],
    ],
  },
  motivated: {
    name: "Motivated",
    emoji: "🔥",
    color: "#d6336c",
    t: [6, 5, 3, 2],
    desc: "You are ready to get things done.",
    tip: "Write down your next step and start it now.",
    quotes: [
      ["The only way to do great work is to love what you do.", "Steve Jobs"],
      ["A journey of a thousand miles begins with a single step.", "Lao Tzu"],
      ["It always seems impossible until it's done.", "Nelson Mandela"],
      [
        "It does not matter how slowly you go as long as you do not stop.",
        "Confucius",
      ],
      [
        "The best time to plant a tree was twenty years ago. The second best time is now.",
        "Chinese proverb",
      ],
      [
        "Raise yourself so high that before every decree of destiny, God asks what you wish.",
        "Allama Iqbal (translated)",
      ],
    ],
  },
  focused: {
    name: "Focused",
    emoji: "🎯",
    color: "#1c7ed6",
    t: [3, 1, 6, -1],
    desc: "Your mind is clear and sharp.",
    tip: "Silence your phone and give one task 25 minutes.",
    quotes: [
      [
        "The main thing is to keep the main thing the main thing.",
        "Stephen Covey",
      ],
      [
        "The sun's rays do not burn until brought to a focus.",
        "Alexander Graham Bell",
      ],
    ],
  },
  grateful: {
    name: "Grateful",
    emoji: "🙏",
    color: "#2f9e44",
    t: [1, 6, 4, 9],
    desc: "Your heart feels full today.",
    tip: "Name three small things that went well today.",
    quotes: [
      [
        "Gratitude is not only the greatest of virtues, but the parent of all others.",
        "Cicero",
      ],
      ["Gratitude turns what we have into enough.", "Melody Beattie"],
    ],
  },
  lonely: {
    name: "Lonely",
    emoji: "🌙",
    color: "#4f5d95",
    t: [-4, -5, 2, -9],
    care: true,
    desc: "You may be missing some connection, and that is human.",
    tip: "Send a short message to someone you trust.",
    quotes: [
      ["Nothing can dim the light which shines from within.", "Maya Angelou"],
      [
        "Within you there is a stillness and a sanctuary to which you can retreat at any time.",
        "Hermann Hesse",
      ],
      ["A person is a person through other people.", "Zulu proverb"],
    ],
  },
  cozy: {
    name: "Cozy",
    emoji: "🧸",
    color: "#e08e79",
    t: [-1, 5, 6, 7],
    desc: "You feel warm and safe.",
    tip: "Make a warm drink and enjoy it slowly.",
    quotes: [
      ["Home is where the heart is.", "Proverb"],
      ["Love is composed of a single soul inhabiting two bodies.", "Aristotle"],
      [
        "If you want to go fast, go alone. If you want to go far, go together.",
        "African proverb",
      ],
    ],
  },
  creative: {
    name: "Creative",
    emoji: "🎨",
    color: "#74b816",
    t: [5, 6, 1, 3],
    desc: "Ideas are coming easily.",
    tip: "Write down every idea, even the silly ones.",
    quotes: [
      ["Creativity takes courage.", "Henri Matisse"],
      ["Imagination is more important than knowledge.", "Albert Einstein"],
    ],
  },
  hopeful: {
    name: "Hopeful",
    emoji: "🌅",
    color: "#f08a5d",
    t: [2, 3, 4, 3],
    desc: "You feel that something good is coming.",
    tip: "Write down one thing you are looking forward to.",
    quotes: [
      ["Hope is the thing with feathers.", "Emily Dickinson"],
      [
        "Hope is being able to see that there is light despite all of the darkness.",
        "Desmond Tutu",
      ],
    ],
  },
  angry: {
    name: "Angry",
    emoji: "😠",
    color: "#c92a2a",
    t: [7, -6, -6, -5],
    desc: "You feel hot and wound up.",
    tip: "Walk away for a few minutes before you speak, and take some slow breaths.",
    quotes: [
      ["The greatest remedy for anger is delay.", "Seneca"],
      ["Anger is a short madness.", "Horace"],
    ],
  },
  bored: {
    name: "Bored",
    emoji: "😑",
    color: "#868e96",
    t: [-4, -3, -1, -3],
    desc: "You feel restless and under-stimulated.",
    tip: "Try one new thing for 10 minutes: a song, a walk or a sketch.",
    quotes: [
      [
        "It is not that we have a short time to live, but that we waste much of it.",
        "Seneca",
      ],
      [
        "The cure for boredom is curiosity. There is no cure for curiosity.",
        "Dorothy Parker",
      ],
      [
        "You can't cross the sea merely by standing and staring at the water.",
        "Rabindranath Tagore",
      ],
    ],
  },
};

let currentQuestion = 0;
let myAnswers = [];
let winnerMood = "balanced";
let topMoods = [];
let currentQuote = "";
let currentTheme = "normal";

let soundsMuted = false;

let panelTimer;
let confettiPieces = [];

const HISTORY_KEY = "moodcheck-history";
const THEME_KEY = "moodcheck-theme";
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const clickSound = new Audio(CLICK_SOUND);
clickSound.volume = SOUNDS_START_VOLUME;

const resultSound = new Audio(RESULT_SOUND);
resultSound.volume = SOUNDS_START_VOLUME;

const confettiCanvas = document.getElementById("confetti");
const themeButtons = document.getElementsByClassName("theme-btn");

const soundBox = document.getElementById("soundBox");
const speakerBtn = document.getElementById("speakerBtn");
const soundSlider = document.getElementById("soundVolume");
const soundMuteBtn = document.getElementById("soundMuteBtn");

const startBtn = document.getElementById("startBtn");
const historyBox = document.getElementById("history");

const questionText = document.getElementById("question");
const dotsBox = document.getElementById("dots");
const optionsBox = document.getElementById("options");
const backBtn = document.getElementById("backBtn");

const moodName = document.getElementById("moodName");
const moodDesc = document.getElementById("moodDesc");
const recipeBox = document.getElementById("recipe");
const pillsBox = document.getElementById("pills");
const tipText = document.getElementById("tip");
const careText = document.getElementById("care");
const skipNote = document.getElementById("skipNote");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const anotherBtn = document.getElementById("anotherBtn");
const changeBtn = document.getElementById("changeBtn");
const againBtn = document.getElementById("againBtn");

function showScreen(screenId) {
  const screens = document.getElementsByClassName("screen");
  for (let i = 0; i < screens.length; i++) {
    screens[i].classList.remove("active");
  }
  document.getElementById(screenId).classList.add("active");
  document.body.setAttribute("data-screen", screenId);
}

function readableTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  if (brightness > 160) {
    return "#1d1b19";
  }
  return "#ffffff";
}

function setAccent(color) {
  document.documentElement.style.setProperty("--accent", color);
  document.documentElement.style.setProperty(
    "--on-accent",
    readableTextColor(color),
  );
}

function setTheme(name) {
  currentTheme = name;
  if (name === "normal") {
    document.body.className = "";
  } else {
    document.body.className = name;
  }
  const pageColor = getComputedStyle(document.body)
    .getPropertyValue("--bg")
    .trim();
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", pageColor);

  for (let i = 0; i < themeButtons.length; i++) {
    const isThis = themeButtons[i].getAttribute("data-theme") === name;
    themeButtons[i].classList.toggle("active", isThis);
    themeButtons[i].setAttribute("aria-pressed", isThis);
  }

  if (document.body.getAttribute("data-screen") !== "result") {
    setAccent(THEMES[name].accent);
  }
  try {
    localStorage.setItem(THEME_KEY, name);
  } catch (error) {}
}

function loadTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem(THEME_KEY);
  } catch (error) {}
  if (saved && THEMES[saved]) {
    return saved;
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "night";
  }
  return "normal";
}

function addUpScores() {
  const total = { e: 0, j: 0, c: 0, h: 0 };
  for (let i = 0; i < myAnswers.length; i++) {
    total.e = total.e + myAnswers[i].e;
    total.j = total.j + myAnswers[i].j;
    total.c = total.c + myAnswers[i].c;
    total.h = total.h + myAnswers[i].h;
  }
  return total;
}

function playClick() {
  if (soundsMuted) {
    return;
  }
  clickSound.currentTime = 0;
  clickSound.play().catch(function () {});
}

function playResult() {
  if (soundsMuted) {
    return;
  }
  resultSound.currentTime = 0;
  resultSound.play().catch(function () {});
}

function updateSoundButtons() {
  if (soundsMuted) {
    soundMuteBtn.textContent = "Unmute";
    speakerBtn.textContent = "🔇";
  } else {
    soundMuteBtn.textContent = "Mute";
    speakerBtn.textContent = "🔊";
  }
  soundMuteBtn.classList.toggle("on", soundsMuted);
}

function openPanel() {
  soundBox.classList.add("open");
  speakerBtn.setAttribute("aria-expanded", "true");
  restartPanelTimer();
}

function closePanel() {
  soundBox.classList.remove("open");
  speakerBtn.setAttribute("aria-expanded", "false");
}

function restartPanelTimer() {
  clearTimeout(panelTimer);
  panelTimer = setTimeout(closePanel, 4000);
}

const confettiContext = confettiCanvas.getContext("2d");

function makeConfetti() {
  if (reduceMotion) {
    return;
  }
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const accent = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent")
    .trim();
  const colors = [accent, "#f2a900", "#2a9d8f", "#d6336c", "#1c7ed6"];

  confettiPieces = [];
  for (let i = 0; i < 110; i++) {
    confettiPieces.push({
      x: window.innerWidth / 2,
      y: window.innerHeight * 0.35,
      speedX: (Math.random() - 0.5) * 16,
      speedY: -Math.random() * 14 - 4,
      size: 6 + Math.random() * 6,
      spin: Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }
  moveConfetti();
}

function moveConfetti() {
  const ctx = confettiContext;
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  const stillFalling = [];
  for (let i = 0; i < confettiPieces.length; i++) {
    const p = confettiPieces[i];
    p.x = p.x + p.speedX;
    p.y = p.y + p.speedY;
    p.speedY = p.speedY + 0.35;
    p.speedX = p.speedX * 0.99;
    p.spin = p.spin + 0.2;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.spin);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    ctx.restore();

    if (p.y < confettiCanvas.height + 20) {
      stillFalling.push(p);
    }
  }
  confettiPieces = stillFalling;

  if (confettiPieces.length > 0) {
    requestAnimationFrame(moveConfetti);
  }
}

function startQuiz() {
  myAnswers = [];
  goToQuestion(0);
}

function goToQuestion(number) {
  currentQuestion = number;
  setAccent(THEMES[currentTheme].accent);
  showScreen("quiz");
  showQuestion();
}

function showQuestion() {
  const question = QUESTIONS[currentQuestion];
  questionText.textContent = question.text;
  backBtn.hidden = currentQuestion === 0;

  makeProgressBars();

  optionsBox.innerHTML = "";
  for (let i = 0; i < question.answers.length; i++) {
    makeOptionButton(question.answers[i]);
  }
  makeOptionButton(NONE_OPTION);
}

function makeProgressBars() {
  dotsBox.innerHTML = "";
  for (let i = 0; i < QUESTIONS.length; i++) {
    const bar = document.createElement("button");
    bar.setAttribute("aria-label", "Go to question " + (i + 1));
    if (i < currentQuestion) {
      bar.classList.add("on");
      bar.style.setProperty("--c", myAnswers[i].col);
      addBarClick(bar, i);
    } else {
      bar.disabled = true;
    }
    dotsBox.appendChild(bar);
  }
}

function addBarClick(bar, number) {
  bar.addEventListener("click", function () {
    goToQuestion(number);
  });
}

function makeOptionButton(answer) {
  const button = document.createElement("button");
  button.style.setProperty("--c", answer.col);

  if (answer.skip) {
    button.classList.add("none");
  }
  if (myAnswers[currentQuestion] === answer) {
    button.classList.add("chosen");
  }

  let hint = "";
  if (answer.hint) {
    hint = "<small>" + answer.hint + "</small>";
  }
  button.innerHTML =
    '<span class="emoji">' +
    answer.emoji +
    '</span><span class="txt">' +
    answer.label +
    hint +
    "</span>";

  button.addEventListener("click", function () {
    chooseAnswer(answer);
  });
  optionsBox.appendChild(button);
}

function chooseAnswer(answer) {
  if (navigator.vibrate) {
    navigator.vibrate(15);
  }

  myAnswers[currentQuestion] = answer;

  currentQuestion = currentQuestion + 1;
  if (currentQuestion < QUESTIONS.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function goBack() {
  if (currentQuestion === 0) {
    return;
  }
  goToQuestion(currentQuestion - 1);
}

function scaleScore(value) {
  let scaled = (value * 10) / (QUESTIONS.length * 2);
  if (scaled > 10) {
    scaled = 10;
  }
  if (scaled < -10) {
    scaled = -10;
  }
  return scaled;
}

function toPercent(value) {
  return Math.round((scaleScore(value) + 10) * 5);
}

function findTopMoods(score) {
  const myPoint = [
    scaleScore(score.e),
    scaleScore(score.j),
    scaleScore(score.c),
    scaleScore(score.h),
  ];
  const list = [];

  for (const id in MOODS) {
    const target = MOODS[id].t;

    let sumOfSquares = 0;
    for (let i = 0; i < 4; i++) {
      const difference = myPoint[i] - target[i];
      sumOfSquares = sumOfSquares + difference * difference;
    }
    const distance = Math.sqrt(sumOfSquares);

    list.push({ id: id, weight: Math.exp(-distance / 5) });
  }

  list.sort(function (a, b) {
    return b.weight - a.weight;
  });

  const total = list[0].weight + list[1].weight + list[2].weight;
  const first = Math.round((list[0].weight / total) * 100);
  const second = Math.round((list[1].weight / total) * 100);
  const third = 100 - first - second;

  return [
    { id: list[0].id, percent: first },
    { id: list[1].id, percent: second },
    { id: list[2].id, percent: third },
  ];
}

function showQuote() {
  const quotes = MOODS[winnerMood].quotes;
  let chosen = quotes[Math.floor(Math.random() * quotes.length)];

  while (quotes.length > 1 && chosen[0] === currentQuote) {
    chosen = quotes[Math.floor(Math.random() * quotes.length)];
  }

  currentQuote = chosen[0];
  quoteText.textContent = "“" + chosen[0] + "”";
  authorText.textContent = "— " + chosen[1];
}

function showResult() {
  const score = addUpScores();
  topMoods = findTopMoods(score);
  winnerMood = topMoods[0].id;
  const mood = MOODS[winnerMood];

  setAccent(mood.color);
  moodName.textContent = mood.emoji + " " + mood.name + " · " + topMoods[0].percent + "%";
  moodDesc.textContent = mood.desc;
  tipText.textContent = "Tip: " + mood.tip;

  if (mood.care) {
    careText.hidden = false;
    careText.textContent =
      "If this feeling stays heavy for several days, it can help to talk to someone you trust.";
  } else {
    careText.hidden = true;
  }

  let skipped = 0;
  for (let i = 0; i < myAnswers.length; i++) {
    if (myAnswers[i].skip) {
      skipped = skipped + 1;
    }
  }
  if (skipped > 0) {
    skipNote.hidden = false;
    skipNote.textContent =
      'You chose "none of these" ' +
      skipped +
      " time(s), so this result uses your other answers.";
  } else {
    skipNote.hidden = true;
  }

  showRecipe();
  pillsBox.innerHTML =
    "<span>Energy " +
    toPercent(score.e) +
    "%</span>" +
    "<span>Joy " +
    toPercent(score.j) +
    "%</span>" +
    "<span>Calm " +
    toPercent(score.c) +
    "%</span>" +
    "<span>Heart " +
    toPercent(score.h) +
    "%</span>";

  showQuote();
  showScreen("result");
  playResult();
  makeConfetti();
  saveHistory(winnerMood);
}

function showRecipe() {
  recipeBox.innerHTML = "";
  for (let i = 0; i < topMoods.length; i++) {
    const mood = MOODS[topMoods[i].id];
    const row = document.createElement("div");
    row.className = "mix";
    row.style.setProperty("--c", mood.color);
    row.innerHTML =
      "<span>" +
      mood.emoji +
      " " +
      mood.name +
      "</span><b>" +
      topMoods[i].percent +
      "%</b>" +
      '<div class="bar"><i data-width="' +
      topMoods[i].percent +
      '"></i></div>';
    recipeBox.appendChild(row);
  }

  setTimeout(function () {
    const fills = recipeBox.getElementsByTagName("i");
    for (let i = 0; i < fills.length; i++) {
      fills[i].style.width = fills[i].getAttribute("data-width") + "%";
    }
  }, 150);
}

function loadHistory() {
  if (!SAVE_MOOD_HISTORY) {
    return [];
  }
  try {
    const saved = localStorage.getItem(HISTORY_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {}
  return [];
}

function saveHistory(moodId) {
  if (!SAVE_MOOD_HISTORY) {
    return;
  }
  const list = loadHistory();
  list.unshift(moodId);
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0, 8)));
  } catch (error) {}
  showHistory();
}

function showHistory() {
  const list = loadHistory();
  if (list.length === 0) {
    historyBox.innerHTML = "";
    return;
  }
  let html = "Recent moods: ";
  for (let i = 0; i < list.length; i++) {
    if (MOODS[list[i]]) {
      html =
        html +
        '<span title="' +
        MOODS[list[i]].name +
        '">' +
        MOODS[list[i]].emoji +
        "</span>";
    }
  }
  historyBox.innerHTML = html;

  const clearButton = document.createElement("button");
  clearButton.textContent = "Clear";
  clearButton.className = "link-btn";
  clearButton.addEventListener("click", clearHistory);
  historyBox.appendChild(clearButton);
}

function clearHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (error) {}
  showHistory();
}

document.addEventListener("click", function (event) {
  const button = event.target.closest("button");
  if (button !== null) {
    playClick();
  }

  if (event.target.closest("#soundBox") === null) {
    closePanel();
  }
});

startBtn.addEventListener("click", startQuiz);
againBtn.addEventListener("click", startQuiz);
backBtn.addEventListener("click", goBack);
anotherBtn.addEventListener("click", showQuote);

changeBtn.addEventListener("click", function () {
  goToQuestion(QUESTIONS.length - 1);
});

speakerBtn.addEventListener("click", function () {
  if (soundBox.classList.contains("open")) {
    closePanel();
  } else {
    openPanel();
  }
});

soundMuteBtn.addEventListener("click", function () {
  soundsMuted = !soundsMuted;
  updateSoundButtons();
  restartPanelTimer();
});

soundSlider.addEventListener("input", function () {
  clickSound.volume = soundSlider.value / 100;
  resultSound.volume = soundSlider.value / 100;
  restartPanelTimer();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePanel();
  }
  if (!document.getElementById("quiz").classList.contains("active")) {
    return;
  }
  if (event.key === "Backspace" || event.key === "ArrowLeft") {
    goBack();
    return;
  }
  const buttons = optionsBox.getElementsByTagName("button");
  const number = Number(event.key) - 1;
  if (number >= 0 && number < buttons.length) {
    buttons[number].click();
  }
});

window.addEventListener("resize", function () {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});

for (let i = 0; i < themeButtons.length; i++) {
  const button = themeButtons[i];
  button.addEventListener("click", function () {
    setTheme(button.getAttribute("data-theme"));
  });
}

setTheme(loadTheme());
soundSlider.value = SOUNDS_START_VOLUME * 100;
showHistory();
