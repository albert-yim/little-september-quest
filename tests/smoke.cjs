const fs = require("fs");

global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};

const element = {
  style: {},
  classList: { add: () => {}, remove: () => {} },
  addEventListener: () => {},
  scrollTo: () => {},
  focus: () => {},
  showModal: () => {},
  close: () => {},
  innerHTML: "",
  textContent: ""
};

global.document = { querySelector: () => element };
global.window = {
  location: { search: "" },
  scrollTo: () => {},
  setTimeout: () => {},
  confirm: () => true
};

const source = fs.readFileSync("app.js", "utf8").replace(
  "boot();",
  'startGame({giftName:"테스트 선물",letter:["테스트 편지"]});'
);
const assertions = `
  for (let index = 0; index <= TOTAL_STEPS; index += 1) {
    state.step = index;
    render();
    if (!app.innerHTML.includes("<section")) throw new Error("Empty screen: " + index);
  }

  state.rewardFirst = "gift";
  state.giftConfirmed = false;
  state.letterRevealed = false;
  if (!giftWarningView().includes('data-action="confirmRewardChoice"')) throw new Error("Gift-first must show a warning choice");
  if (!giftWarningView().includes("nyong-nervous")) throw new Error("Sad Nyong must appear in the gift warning");
  state.giftConfirmed = true;
  if (!giftView().includes('data-action="giftToLetter"')) throw new Error("Gift-first must lead to letter");

  state.letterRevealed = true;
  if (!letterView().includes("letter-card")) throw new Error("Letter missing after reveal");
  if (!letterView().includes('data-action="finish"')) throw new Error("Gift-first letter must finish");

  state.rewardFirst = "letter";
  state.letterRevealed = false;
  for (let index = 0; index <= TOTAL_STEPS; index += 1) {
    state.step = index;
    render();
    if (app.innerHTML.includes("nyong-nervous")) throw new Error("Sad Nyong appeared outside the gift warning: " + index);
  }
  if (!letterView().includes("letter-card")) throw new Error("Letter-first branch missing");
  if (!letterView().includes('data-action="next"')) throw new Error("Letter-first must lead to gift");
  state.finished = true;
  render();
  if (!app.innerHTML.includes("birthday-cake")) throw new Error("Ending missing");
  for (const kind of ["memory", "letter", "gift"]) {
    if (!app.innerHTML.includes('data-kind="' + kind + '"')) throw new Error("Missing image save option: " + kind);
  }
  state.missions.push(1);
  if (freshState().missions.length) throw new Error("Reset state shared references");
  if (escapeHTML('<script>') !== '&lt;script&gt;') throw new Error("Unsafe memory escaping");
  global.localStorage.getItem = () => JSON.stringify({version:3,step:99,missions:null,mood:7});
  const recovered = loadState();
  if (recovered.step !== 17 || recovered.missions.length || recovered.mood !== '') throw new Error("Invalid save not recovered");
`;

eval(source + assertions);
console.log("Smoke test passed: 18 screens, both ending branches, reset isolation, memory escaping, invalid save recovery");
