let CONFIG;
const PROTECTED_CONFIG = {
  "salt": "19YUrwNTL1cDNgxXICwO5A==",
  "iv": "lsS76lKxhIci6hXW",
  "data": "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",
  "iterations": 250000
};

const STORAGE_KEY = "piyak-birthday-quest-v1";
const TOTAL_STEPS = 17;

const initialState = {
  version: 3,
  step: 0,
  mood: "",
  strengthsDone: [false, false],
  cafeTitle: "",
  missions: [],
  balloonTaps: 0,
  bestMoment: "",
  rewardFirst: "",
  giftConfirmed: false,
  letterRevealed: false,
  recoveryChoice: ""
};

const freshState = () => ({ ...initialState, strengthsDone: [false, false], missions: [], answers: {}, stars: [], finished: false, wish: "", candles: 0, blownCandles: [] });
const STOPS = [
  { name: "생일 아침", icon: "☀", from: 0, to: 3, note: "따뜻한 마음으로 시작" },
  { name: "수원으로", icon: "☕", from: 4, to: 5, note: "둘만의 드라이브" },
  { name: "달콤한 쉼표", icon: "🍰", from: 6, to: 9, note: "맛있는 것과 좋은 풍경" },
  { name: "행궁동 산책", icon: "✿", from: 10, to: 10, note: "발길 닿는 대로" },
  { name: "하늘 가까이", icon: "🎈", from: 11, to: 12, note: "조금 특별한 시선" },
  { name: "우리의 밤", icon: "☾", from: 13, to: 17, note: "아직 남아 있는 이야기" }
];
const escapeHTML = (value) => String(value || "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const fromBase64 = value => Uint8Array.from(atob(value), character => character.charCodeAt(0));
const toBase64 = value => btoa(String.fromCharCode(...new Uint8Array(value)));

let state = loadState();

// Visual QA helper: ?qaStep=8 opens a specific screen without changing saved progress.
const qaParams = new URLSearchParams(window.location.search);
if (qaParams.has("qaStep")) {
  state = {
    ...state,
    step: Math.max(0, Math.min(TOTAL_STEPS, Number(qaParams.get("qaStep")) || 0)),
    maxStep: Math.max(0, Math.min(TOTAL_STEPS, Number(qaParams.get("qaStep")) || 0)),
    finished: qaParams.get("ending") === "1",
    mood: qaParams.get("mood") || "오늘이 조금 기대돼요",
    strengthsDone: [true, true],
    missions: [0, 1],
    balloonTaps: 8,
    rewardFirst: qaParams.get("reward") || "letter",
    giftConfirmed: qaParams.get("giftConfirmed") === "1",
    letterRevealed: qaParams.get("letter") === "1",
    recoveryChoice: qaParams.get("recovery") || "expert"
  };
}
const app = document.querySelector("#app");
const progressBar = document.querySelector("#progress-bar");
const progressLabel = document.querySelector("#progress-label");
const toast = document.querySelector("#toast");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const result = saved.version === initialState.version ? { ...freshState(), ...saved } : freshState();
    result.step = Number.isInteger(result.step) ? Math.max(0, Math.min(TOTAL_STEPS, result.step)) : 0;
    result.strengthsDone = Array.isArray(result.strengthsDone) && result.strengthsDone.length === 2 ? result.strengthsDone.map(Boolean) : [false, false];
    result.missions = Array.isArray(result.missions) ? [...new Set(result.missions.filter(x => Number.isInteger(x) && x >= 0 && x < 5))] : [];
    result.stars = Array.isArray(result.stars) ? result.stars : [];
    result.answers = result.answers && typeof result.answers === "object" ? result.answers : {};
    result.balloonTaps = Math.max(0, Math.min(8, Number(result.balloonTaps) || 0));
    result.maxStep = Math.max(result.step, Math.min(17, Number(result.maxStep) || 0));
    // Old saves showed the letter even when the gift was chosen first.
    if (result.rewardFirst === "gift" && result.step === 15 && result.maxStep < 17) result.step = result.maxStep = 16;
    for (const key of ["mood", "cafeTitle", "bestMoment", "wish"]) result[key] = typeof result[key] === "string" ? result[key] : "";
    result.blownCandles = Array.isArray(result.blownCandles) ? [...new Set(result.blownCandles.filter(x => [0, 1, 2].includes(x)))] : [];
    result.candles = result.blownCandles.length;
    return result;
  } catch {
    return freshState();
  }
}

function saveState() {
  if (qaParams.has("qaStep")) return;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch { showToast("이 브라우저에서는 저장이 어려워요. 창을 닫기 전까지 계속 즐길 수 있어요."); }
}

function setState(patch) {
  const previousStep = state.step;
  state = { ...state, ...patch };
  state.maxStep = Math.max(state.maxStep || 0, state.step);
  saveState();
  render();
  if (state.step !== previousStep) app.scrollTo({ top: 0, behavior: "smooth" });
}

function next() {
  setState({ step: Math.min(state.step + 1, TOTAL_STEPS) });
}

function setStep(step) {
  setState({ step });
}

function character(type, x, y = 2, scale = 1, pose = "neutral") {
  const label = type === "chick" ? "삐약 병아리" : "뇽뇽 공룡";
  const name = type === "chick" ? "piyak" : "nyong";
  const poseClass = type === "chick" ? "chick" : "nyong";
  return `<img class="pixel-character ${type} ${poseClass}-${pose}" src="assets/characters/${name}-${pose}.png" style="--x:${x};--y:${y}px;--scale:${scale}" alt="${label}" width="180" height="180" decoding="async" draggable="false" />`;
}

function scene({ speech = "", theme = "", both = true, chickX = "36%", dinoX = "68%", chickPose = "neutral", dinoPose = "neutral" } = {}) {
  return `<div class="scene ${theme}">
    <div class="landscape" aria-hidden="true"><span class="cloud cloud-one"></span><span class="cloud cloud-two"></span><div class="hill hill-one"></div><div class="hill hill-two"></div><div class="fortress"><i></i><i></i><i></i><i></i><i></i><div class="gate"><span></span></div></div><div class="path"></div><span class="flowers">✿ · ✿</span></div>
    ${theme === "night" || theme === "dinner" ? '<span class="pixel-star"></span>' : '<span class="pixel-sun"></span>'}
    ${speech ? `<div class="speech">${speech}</div>` : ""}
    ${character("chick", chickX, 2, .94, chickPose)}
    ${both ? character("dino", dinoX, 2, 1, dinoPose) : ""}
    ${[0, 8, 10].includes(state.step) ? `<button class="hidden-star ${state.stars.includes(state.step) ? "found" : ""}" data-action="findStar" aria-label="숨은 하트 수집하기" ${state.stars.includes(state.step) ? "disabled" : ""}>${state.stars.includes(state.step) ? "♥" : "♡"}</button>` : ""}
  </div>`;
}

function screen(label, title, body) {
  const stop = STOPS.find(s => state.step >= s.from && state.step <= s.to);
  return `<section class="screen ${state.step === 0 ? "intro-screen" : ""}"><div class="chapter-row"><span class="chapter-label">${label}</span><span class="location-label">${stop.icon} ${stop.name}</span></div><h2>${title}</h2>${body}<p class="save-note">${qaParams.has("qaStep") ? "미리보기 · 실제 진행에는 저장되지 않아요" : "우리의 모험은 이 기기에 자동 저장돼요"}</p></section>`;
}

function choices(items, handler = "chooseAndNext") {
  return `<div class="choices">${items.map((item) => {
    const value = typeof item === "string" ? item : item.value;
    const label = typeof item === "string" ? item : item.label;
    const small = typeof item === "string" ? "" : item.small || "";
    return `<button class="choice" data-action="${handler}" data-value="${value}">${label}${small ? `<small>${small}</small>` : ""}</button>`;
  }).join("")}</div>`;
}

function reward(icon, title, description, extra = "") {
  return `<div class="reward-card coupon-reveal ${extra}"><span class="reward-icon">${icon}</span><h3>${title}</h3><p>${description}</p></div>`;
}

function couponNext(label) {
  return `<button class="button secondary" data-action="next">${label}</button>`;
}

function render() {
  const percentage = Math.round((Math.min(state.maxStep || state.step, TOTAL_STEPS) / TOTAL_STEPS) * 100);
  progressBar.style.width = `${percentage}%`;
  progressLabel.textContent = `${percentage}%`;

  const views = [
    introView,
    moodView,
    soupView,
    soupRatingView,
    coffeeView,
    strengthsView,
    lunchView,
    lunchQuestionView,
    cafeView,
    cafeQuestionView,
    exploreView,
    flyingView,
    flyingCouponView,
    dinnerView,
    finalChoiceView,
    letterView,
    recoveryView,
    giftView
  ];
  const active = document.activeElement;
  const focusedAction = active?.dataset?.action;
  const focusedIndex = active?.dataset?.index;
  app.innerHTML = state.finished
    ? endingView()
    : state.step === 16 && state.rewardFirst === "gift" && !state.giftConfirmed
      ? giftWarningView()
      : views[state.step]();
  const sameControl = focusedAction && app.querySelector(`[data-action="${focusedAction}"]${focusedIndex !== undefined ? `[data-index="${focusedIndex}"]` : ""}`);
  (sameControl || app).focus({ preventScroll: true });
}

function introView() {
  return screen("A DAY JUST FOR YOU", "오늘은 온 세상이<br><em>삐약 편.</em>", `
    ${scene({ speech: "삐약아, 오늘은 평범한 하루가 아니야!" })}
    <p class="lead">익숙한 우리, 조금 특별한 하루.<br>수원 곳곳에 숨겨둔 뇽뇽의 마음을 찾아줘.</p>
    <div class="invitation"><span class="invite-date">09 <b>/</b> 14</span><div><strong>삐약님을 초대합니다</strong><small>주인공 삐약 · 오늘의 가이드 뇽뇽</small></div><span class="seal">♥</span></div>
    <button class="button" data-action="next">초대장 수락하기 <span>→</span></button>
    <p class="tiny-note">실제 데이트와 함께 천천히 즐겨주세요.<br>풍경 속 작은 ♡도 찾아보세요. 총 세 개예요!</p>
  `);
}

function moodView() {
  return screen("QUEST 01", "현재 상태를 알려주세요", `
    ${scene({ speech: "오늘의 삐약은 어떤 상태인가요?", both: false, chickX: "50%" })}
    <p class="lead">선택에 따라 첫 번째 회복 아이템이 지급됩니다.</p>
    ${choices([
      "아직 졸려요",
      "일단 배고파요",
      "오늘이 조금 기대돼요",
      "뇽뇽이 뭘 준비했는지 수상해요"
    ], "selectMood")}
  `);
}

function soupView() {
  const reactions = {
    "아직 졸려요": "잠든 삐약을 깨울 따뜻한 아이템이 도착했습니다.",
    "일단 배고파요": "아주 정확한 상태 진단입니다. 긴급 식량을 지급합니다.",
    "오늘이 조금 기대돼요": "기대 수치가 감지되어 뇽뇽의 긴장도가 상승합니다.",
    "뇽뇽이 뭘 준비했는지 수상해요": "의심은 타당합니다. 하지만 이미 게임은 시작되었습니다."
  };
  const moodPose = state.mood.includes("수상")
    ? { dinoPose: "neutral" }
    : state.mood.includes("기대")
      ? { chickPose: "excited", dinoPose: "excited" }
      : {};
  return screen("BREAKFAST", "첫 번째 보상을 획득했습니다!", `
    ${scene({ speech: reactions[state.mood] || "따뜻한 회복 아이템이 도착했습니다.", ...moodPose })}
    ${reward("🥣", "뇽뇽표 생일 미역국", "정성은 충분히 넣었습니다. 따뜻할 때 맛있게 먹어주세요.")}
    ${couponNext("미역국 다 먹었어요")}
  `);
}

function soupRatingView() {
  return screen("TASTE CHECK", "뇽뇽표 미역국, 어땠나요?", `
    ${scene({ speech: "제작자의 향후 발전을 위해 솔직한 평가를 부탁드립니다." })}
    ${choices(["내년에도 부탁해", "생일이라 후하게 합격", "생각보다 제법인데?", "설거지까지 하면 완벽"])}
  `);
}

function coffeeView() {
  return screen("ITEM 01", "이동용 카페인 획득", `
    ${scene({ speech: "수원으로 출발! 운전과 결제는 뇽뇽 담당이야.", chickPose: "excited", dinoPose: "excited" })}
    ${reward("☕", "드라이브스루 커피 이용권", "이동하는 동안 원하는 음료를 주문해주세요.", "ticket")}
    ${couponNext("커피 받고 수원으로 출발")}
  `);
}

function strengthsView() {
  const allDone = state.strengthsDone.every(Boolean);
  return screen("DRIVE QUEST", "서로의 장점 발견하기", `
    ${scene({ speech: "정답은 없어. 서로에게 직접 말해주는 게 미션이야!" })}
    <p class="lead">각자 상대방의 장점 세 가지를 소리 내어 말해주세요.</p>
    <div class="talk-checks">
      <label class="talk-check ${state.strengthsDone[0] ? "checked" : ""}">
        <input type="checkbox" data-action="strengthCheck" data-index="0" ${state.strengthsDone[0] ? "checked" : ""} />
        <span><strong>삐약 → 뇽뇽</strong><br />뇽뇽의 장점 세 가지 말하기</span>
      </label>
      <label class="talk-check ${state.strengthsDone[1] ? "checked" : ""}">
        <input type="checkbox" data-action="strengthCheck" data-index="1" ${state.strengthsDone[1] ? "checked" : ""} />
        <span><strong>뇽뇽 → 삐약</strong><br />삐약의 장점 세 가지 말하기</span>
      </label>
    </div>
    <button class="button" data-action="next" ${allDone ? "" : "disabled"}>완료! 다음 보상 확인하기</button>
  `);
}

function lunchView() {
  return screen("ITEM 02", "점심 선택권 해금", `
    ${scene({ speech: "수원 도착! 배고픈 삐약에게 절대 권한을 지급합니다.", chickPose: "excited", dinoPose: "excited" })}
    ${reward("🍽️", "오늘의 점심 자유이용권", "메뉴 선택은 삐약, 맛집 안내와 결제는 뇽뇽이 담당합니다.", "ticket")}
    <div class="reward-card">
      <h3>사용 규칙</h3>
      <p>먹고 싶은 메뉴를 솔직하게 말하기<br />가격을 보고 눈치 주기 금지<br />맛있는 한입은 사이좋게 나누기</p>
    </div>
    ${couponNext("점심 다 먹었어요")}
  `);
}

function lunchQuestionView() {
  return screen("AFTER LUNCH", "디저트 배는 남아 있나요?", `
    ${scene({ speech: "정답에 상관없이 다음 장소는 아주 달콤할 예정이야." })}
    ${choices(["당연하지", "조금 남았어", "카페 배는 원래 따로야", "일단 가보자"])}
  `);
}

function cafeView() {
  return screen("QUEST 03", "창밖의 다음 장면", `
    ${scene({ speech: "삐약이 가고 싶어 했던 뷰 카페에 도착!", theme: "cafe", chickPose: "love", dinoPose: "love" })}
    ${reward("🍰", "행궁동 뷰 카페 이용권", "원하는 음료와 디저트를 골라주세요. 방금 밥을 먹었다는 사실은 잠시 잊어도 좋습니다.", "ticket")}
    ${couponNext("카페에서 푹 쉬었어요")}
  `);
}

function cafeQuestionView() {
  return screen("VIEW CHECK", "창밖의 오늘을 저장해주세요", `
    ${scene({ speech: "이제 바라보던 풍경 속으로 직접 들어갈 시간이야.", theme: "cafe", chickPose: "love", dinoPose: "love" })}
    <p class="lead">창밖 풍경과 함께 오늘을 기억한다면 어떤 제목이 좋을까요?</p>
    ${choices([
      "우리의 수원 여행",
      "생일 주인공의 외출",
      "뇽뇽이 뭔가 많이 준비한 날",
      "제목은 오늘이 끝난 뒤 정하기"
    ], "selectCafeTitle")}
  `);
}

function exploreView() {
  const missions = [
    ["🧸", "서로를 닮은 물건 발견하기"],
    ["🏘️", "오늘 가장 예쁜 골목 고르기"],
    ["📷", "서로의 자연스러운 사진 찍기"],
    ["💕", "같이 찍은 사진 한 장 남기기"],
    ["🎁", "마음에 드는 소품 찾아보기"]
  ];
  return screen("FREE QUEST", "행궁동 자유 탐험", `
    ${scene({ speech: "정해진 길은 없어. 마음 가는 대로 구경하자!", chickPose: "excited", dinoPose: "excited" })}
    <p class="lead">다섯 가지 중 두 개만 완료하면 다음 장소가 열립니다.</p>
    <div class="quest-counter"><span>오늘의 작은 발견</span><strong>${state.missions.length} / 5</strong></div>
    <div class="mission-grid">
      ${missions.map(([emoji, label], index) => `<button class="mission ${state.missions.includes(index) ? "done" : ""}" data-action="toggleMission" data-index="${index}"><span class="emoji">${emoji}</span>${label}${state.missions.includes(index) ? " ✓" : ""}</button>`).join("")}
    </div>
    <button class="button" data-action="next" ${state.missions.length >= 2 ? "" : "disabled"}>하늘에 숨은 다음 보상 찾기</button>
  `);
}

function flyingView() {
  const ready = state.balloonTaps >= 8;
  return screen("SKY QUEST", ready ? "비행 준비 완료!" : "열기구를 띄워주세요", `
    ${scene({ speech: ready ? "오늘의 가장 높은 순간이 기다리고 있어!" : "풍선을 여덟 번 눌러 하늘까지 올려보자.", theme: "night", chickPose: ready ? "excited" : "neutral", dinoPose: ready ? "excited" : "neutral" })}
    <div class="balloon-game" style="--lift:${Math.min(state.balloonTaps, 8)}">
      <span class="sky-cloud sky-cloud-one" aria-hidden="true">☁</span><span class="sky-cloud sky-cloud-two" aria-hidden="true">☁</span>
      <div class="altitude">마음 고도 <strong>${Math.min(state.balloonTaps, 8) * 100} m</strong></div>
      <button class="balloon" data-action="tapBalloon" aria-label="열기구 띄우기 ${state.balloonTaps}/8" ${ready ? "disabled" : ""}><span>♥</span><i></i></button>
      <p class="sky-caption" aria-live="polite">${["두근거림을 연료로 출발!", "뇽뇽이 모래주머니를 풀었어요", "골목이 조금씩 작아져요", "좋아하는 풍경을 눈에 담아요", "벌써 반이나 올라왔어요!", "행복한 기억 하나를 더 싣고", "구름에 거의 다 닿았어요", "삐약아, 손 꼭 잡아!", "수원 하늘까지 마음이 도착했어요"][Math.min(state.balloonTaps, 8)]}</p>
    </div>
    ${ready ? '<button class="button" data-action="next">해금된 쿠폰 확인하기</button>' : '<button class="button" disabled>조금만 더 높이!</button>'}
  `);
}

function flyingCouponView() {
  return screen("ITEM 04", "하늘 산책권 해금", `
    ${scene({ speech: "오늘의 가장 높은 순간이 기다리고 있어!", theme: "night", chickPose: "excited", dinoPose: "excited" })}
    ${reward("🎈", "삐약 전용 하늘 산책권", "하늘이 허락하면 오늘 사용하고, 운항이 어렵다면 다음 데이트로 안전하게 이월됩니다.", "ticket")}
    ${couponNext("하늘 산책을 마치고 저녁으로")}
    <button class="text-button" data-action="rainCheck">운항이 어려워요 · 다음 데이트에 쓰기</button>
  `);
}

function dinnerView() {
  return screen("DINNER", "오늘의 만찬 완료", `
    ${scene({ speech: "많이 걷고, 많이 먹고, 많이 웃은 하루였어.", theme: "dinner", chickPose: "love", dinoPose: "love" })}
    <div class="stats-card">
      <div class="stat-line"><span>행복도</span><span>100%</span></div>
      <div class="stat-line"><span>포만감</span><span>96%</span></div>
      <div class="stat-line"><span>삐약의 체력</span><span>12%</span></div>
      <div class="stat-line"><span>뇽뇽의 긴장도</span><span>98%</span></div>
    </div>
    <p class="lead">오늘 하루 중 다시 한번 돌아가고 싶은 순간은?</p>
    ${choices(["미역국과 출발 준비", "드라이브와 커피", "점심과 뷰 카페", "함께 걸었던 수원", "오늘의 가장 높은 순간", "아직 마지막이 남은 지금"], "selectBestMoment")}
  `);
}

function finalChoiceView() {
  return screen("FINAL SELECT", "무엇부터 열어볼까요?", `
    ${scene({ speech: "마지막 보상은 하나만… 아니, 무엇부터 받을지 골라줘!", theme: "gift" })}
    <p class="lead">삐약의 마음이 향하는 쪽을 선택해주세요.</p>
    ${choices([
      { value: "letter", label: "💌 뇽뇽의 진심이 담긴 편지", small: "조금 서툴지만 마음은 많이 담았습니다." },
      { value: "gift", label: "🎁 정체를 알 수 없는 비밀 선물", small: "상자가 수상하게 흔들리고 있습니다." }
    ], "selectRewardFirst")}
  `);
}

function giftWarningView() {
  return screen("ONE MORE THOUGHT", "잠깐, 정말 선물부터 볼까요?", `
    ${scene({ speech: "선택받지 못한 뇽뇽이의 편지가 슬퍼서 울고 있어요…", theme: "gift", dinoPose: "nervous" })}
    <p class="lead">그래도 선물이 궁금하다면 그대로 진행해도 괜찮아요.</p>
    ${choices([
      { value: "gift", label: "🎁 그래도 괜찮아, 선물 고르기", small: "먼저 비밀 선물을 확인할게요." },
      { value: "letter", label: "💌 마음이 쓰여, 편지 고르기", small: "뇽뇽이의 마음부터 읽어볼게요." }
    ], "confirmRewardChoice")}
  `);
}

function letterView() {
  const choseGift = state.rewardFirst === "gift";
  return screen("LETTER", "삐약에게 보내는 편지", `
    ${scene({ speech: choseGift ? "선물에 다 담지 못한 마음도 전할게." : "오늘 꼭 들려주고 싶었던 말이 있어.", theme: "gift", chickX: "34%", dinoX: "70%", chickPose: "love", dinoPose: "love" })}
    <article class="letter-card">
      <span class="letter-date">SEPTEMBER 14 · WITH LOVE</span>
      ${CONFIG.letter.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <p class="letter-sign">${escapeHTML(CONFIG.signature || "뇽뇽이가")}</p>
    </article>
    <button class="button" data-action="${choseGift ? "finish" : "next"}">${choseGift ? "우리의 하루 간직하기" : "뇽뇽이 숨겨둔 보상 확인하기"}</button>
  `);
}

function recoveryView() {
  return screen("LAST QUESTION", "피로를 누구에게 맡길까요?", `
    ${scene({ speech: "오늘은 편히 쉬고, 컨디션이 좋아진 뒤 사용하면 돼!", theme: "night" })}
    <p class="lead">긴 하루를 보낸 삐약에게 가장 도움이 될 것 같은 것은?</p>
    ${choices([
      { value: "husband", label: "🦖 정성은 가득한 뇽뇽 마사지", small: "사랑 100%, 기술은 아직 성장 중" },
      { value: "expert", label: "✨ 정성과 실력을 갖춘 전문가", small: "뇽뇽은 충전·예약·이동 지원 담당" }
    ], "selectRecovery")}
  `);
}

function giftView() {
  const husbandChoice = state.recoveryChoice === "husband";
  return screen("LEGENDARY ITEM", "행복 게이지 100%", `
    ${scene({ speech: husbandChoice ? "나를 골라줘서 감동이야! 전문가 도움도 보너스로 준비했어." : "현명한 선택이야. 뇽뇽은 충전과 결제를 맡을게!", theme: "gift", chickPose: "love", dinoPose: "gift" })}
    <div class="gift-box"></div>
    <div class="reward-card final-pass">
      <span class="reward-icon">🌿</span>
      <p class="eyebrow">PIYAK'S RECOVERY PASS</p>
      <h3>${CONFIG.giftName}</h3>
      <p>컨디션이 좋아진 날, 삐약이 가장 받고 싶은 관리를 직접 골라 편안하게 쉬는 선물입니다.</p>
      <ul class="terms">
        <li>충전과 결제는 뇽뇽 담당</li>
        <li>원하는 관리와 날짜는 삐약 선택</li>
        <li>충전 금액을 모두 사용할 때까지 유효</li>
        ${husbandChoice ? "<li>뇽뇽 마사지 보너스 포함</li>" : ""}
      </ul>
    </div>
    <p class="lead">오늘의 피로도, 그동안 쌓인 피로도 천천히 다 풀리길 바라. 생일 진심으로 축하해. 사랑해.</p>
    <button class="button gold" data-action="${state.rewardFirst === "gift" ? "giftToLetter" : "finish"}">${state.rewardFirst === "gift" ? "선물에 담긴 편지도 열어보기" : "우리의 하루 간직하기"}</button>
  `);
}

function endingView() {
  return screen("HAPPY BIRTHDAY, MY LOVE", "오늘도, 다음 생일도<br><em>같은 파티원으로.</em>", `
    ${scene({ speech: "오늘 함께해줘서 고마워. 내일도 잘 부탁해!", theme: "gift", chickPose: "love", dinoPose: "love" })}
    <div class="birthday-cake" aria-label="생일 케이크"><div class="candles">${[0, 1, 2].map(i => `<button class="candle ${state.blownCandles.includes(i) ? "blown" : ""}" data-action="candle" data-index="${i}" aria-label="${i + 1}번째 초 끄기" ${state.blownCandles.includes(i) ? "disabled" : ""}><span></span>▥</button>`).join("")}</div><div class="cake-top">HAPPY BIRTHDAY</div><div class="cake-base">삐약의 소원을 응원해 ♡</div></div>
    <p class="tiny-note">${state.candles >= 3 ? "소원 접수 완료. 뇽뇽도 함께 응원할게!" : "마음속으로 소원을 빌고, 촛불 세 개를 톡톡 꺼주세요."}</p>
    <article class="memory-card"><p class="eyebrow">OUR LITTLE TIME CAPSULE</p><h3>${escapeHTML(state.cafeTitle && !state.cafeTitle.includes("끝난") ? state.cafeTitle : "우리의 수원 생일 여행")}</h3><div class="memory-line"><span>가장 좋았던 순간</span><strong>${escapeHTML(state.bestMoment || "함께한 모든 순간")}</strong></div><div class="memory-line"><span>오늘의 수집 기록</span><strong>발견 ${state.missions.length}개 · 숨은 하트 ${state.stars.length}개</strong></div><label for="wish">미래의 우리에게 남기는 한 줄</label><textarea id="wish" rows="3" maxlength="200" placeholder="내년에도 오늘처럼 함께 웃자.">${escapeHTML(state.wish)}</textarea><small id="wish-status" role="status">한 줄을 쓰면 자동으로 저장돼요.</small></article>
    <div class="save-actions">
      <button class="button" data-action="saveKeepsake" data-kind="memory">오늘의 기억 이미지로 저장하기 ↓</button>
      <button class="button secondary" data-action="saveKeepsake" data-kind="letter">뇽뇽이의 편지 이미지로 저장하기</button>
      <button class="button secondary" data-action="saveKeepsake" data-kind="gift">더풋샵 선물권 이미지로 저장하기</button>
    </div>
    <p class="tiny-note">휴대폰에서는 공유 창이 열리면 ‘이미지 저장’을 선택해주세요.</p>
  `);
}

function respond(value) {
  const responses = {
    "내년에도 부탁해": "내년 생일 아침도 예약 완료! 더 맛있게 끓여줄게.",
    "생일이라 후하게 합격": "생일 버프 덕분에 합격! 다음엔 실력으로 받아볼게.",
    "생각보다 제법인데?": "방금 그 칭찬, 뇽뇽이 오래 기억할 예정입니다.",
    "설거지까지 하면 완벽": "물론이지. 오늘의 주인공은 손에 물 묻히지 않기!",
    "당연하지": "좋아, 삐약의 디저트 레이더를 따라가자!",
    "조금 남았어": "그럼 맛있는 걸로 조금씩 나눠 먹자.",
    "카페 배는 원래 따로야": "역시 우리 삐약, 아주 과학적인 답변이야.",
    "일단 가보자": "좋아. 편하게 앉아서 풍경만 보고 있어도 돼."
  };
  state.answers[state.step] = value;
  saveState();
  document.querySelector("#reaction-text").textContent = responses[value] || "삐약의 마음, 잘 기억해둘게.";
  document.querySelector("#reaction-dialog").showModal();
}

function roundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function wrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  for (const paragraph of String(text).split("\n")) {
    let line = "";
    for (const character of Array.from(paragraph)) {
      const candidate = line + character;
      if (line && ctx.measureText(candidate).width > maxWidth) {
        ctx.fillText(line.trimEnd(), x, y);
        y += lineHeight;
        line = character.trimStart();
      } else {
        line = candidate;
      }
    }
    if (line) ctx.fillText(line.trimEnd(), x, y);
    y += lineHeight;
  }
  return y;
}

function keepsakeCanvas(kind) {
  const heights = { memory: 1500, letter: 3800, gift: 1500 };
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = heights[kind] || heights.memory;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const padding = 86;

  ctx.fillStyle = "#fcf8ee";
  ctx.fillRect(0, 0, width, canvas.height);
  ctx.strokeStyle = "#aeb99a";
  ctx.lineWidth = 4;
  roundedRect(ctx, 34, 34, width - 68, canvas.height - 68, 34);
  ctx.stroke();
  ctx.textAlign = "center";
  ctx.fillStyle = "#8b7958";
  ctx.font = '24px "Gowun Dodum", sans-serif';
  ctx.fillText("PIYAK'S BIRTHDAY QUEST · 09.14", width / 2, 115);
  ctx.fillStyle = "#a75258";
  ctx.font = '34px "Gowun Dodum", sans-serif';
  ctx.fillText("♥", width / 2, 172);

  if (kind === "letter") {
    ctx.fillStyle = "#414c3e";
    ctx.font = 'bold 66px "Gowun Dodum", sans-serif';
    ctx.fillText("삐약에게 보내는 편지", width / 2, 270);
    ctx.fillStyle = "#fffaf0";
    roundedRect(ctx, padding, 340, width - padding * 2, canvas.height - 450, 28);
    ctx.fill();
    ctx.strokeStyle = "#d5d7c2";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.textAlign = "left";
    ctx.fillStyle = "#a59170";
    ctx.font = '23px "Gowun Dodum", sans-serif';
    ctx.fillText("SEPTEMBER 14 · WITH LOVE", padding + 58, 420);
    ctx.fillStyle = "#414c3e";
    ctx.font = '37px "Gowun Dodum", sans-serif';
    let y = 515;
    for (const paragraph of CONFIG.letter) {
      y = wrappedText(ctx, paragraph, padding + 58, y, width - padding * 2 - 116, 63) + 24;
    }
    ctx.textAlign = "right";
    ctx.fillStyle = "#8d7358";
    ctx.font = '36px "Gowun Dodum", sans-serif';
    ctx.fillText(CONFIG.signature || "뇽뇽이가", width - padding - 58, canvas.height - 155);
  } else if (kind === "gift") {
    ctx.fillStyle = "#414c3e";
    ctx.font = 'bold 68px "Gowun Dodum", sans-serif';
    ctx.fillText("삐약의 힐링 충전권", width / 2, 270);
    ctx.fillStyle = "#faf0cd";
    roundedRect(ctx, padding, 350, width - padding * 2, 930, 34);
    ctx.fill();
    ctx.strokeStyle = "#bca66f";
    ctx.setLineDash([16, 12]);
    ctx.lineWidth = 4;
    roundedRect(ctx, padding + 20, 370, width - padding * 2 - 40, 890, 24);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#7c895e";
    ctx.font = '70px "Gowun Dodum", sans-serif';
    ctx.fillText("🌿", width / 2, 510);
    ctx.fillStyle = "#8b7958";
    ctx.font = '24px "Gowun Dodum", sans-serif';
    ctx.fillText("PIYAK'S RECOVERY PASS", width / 2, 575);
    ctx.fillStyle = "#5e7148";
    ctx.font = 'bold 58px "Gowun Dodum", sans-serif';
    ctx.fillText(CONFIG.giftName, width / 2, 665);
    ctx.textAlign = "left";
    ctx.fillStyle = "#626858";
    ctx.font = '34px "Gowun Dodum", sans-serif';
    let y = wrappedText(ctx, "컨디션이 좋아진 날, 삐약이 가장 받고 싶은 관리를 직접 골라 편안하게 쉬는 선물입니다.", padding + 72, 765, width - padding * 2 - 144, 57);
    y += 36;
    for (const term of ["✓  충전과 결제는 뇽뇽 담당", "✓  원하는 관리와 날짜는 삐약 선택", "✓  충전 금액을 모두 사용할 때까지 유효"]) {
      ctx.fillText(term, padding + 72, y);
      y += 67;
    }
    ctx.textAlign = "center";
    ctx.fillStyle = "#8d7358";
    ctx.font = '31px "Gowun Dodum", sans-serif';
    ctx.fillText("생일 진심으로 축하해. 사랑해.", width / 2, 1380);
  } else {
    ctx.fillStyle = "#414c3e";
    ctx.font = 'bold 70px "Gowun Dodum", sans-serif';
    ctx.fillText("오늘도, 다음 생일도", width / 2, 270);
    ctx.fillStyle = "#829359";
    ctx.fillText("같은 파티원으로.", width / 2, 355);
    ctx.fillStyle = "#fffdf7";
    roundedRect(ctx, padding, 450, width - padding * 2, 760, 30);
    ctx.fill();
    ctx.strokeStyle = "#d6d8c5";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.textAlign = "left";
    ctx.fillStyle = "#8b7958";
    ctx.font = '23px "Gowun Dodum", sans-serif';
    ctx.fillText("OUR LITTLE TIME CAPSULE", padding + 56, 535);
    ctx.fillStyle = "#414c3e";
    ctx.font = 'bold 48px "Gowun Dodum", sans-serif';
    wrappedText(ctx, state.cafeTitle && !state.cafeTitle.includes("끝난") ? state.cafeTitle : "우리의 수원 생일 여행", padding + 56, 620, width - padding * 2 - 112, 62);
    ctx.fillStyle = "#919582";
    ctx.font = '27px "Gowun Dodum", sans-serif';
    ctx.fillText("가장 좋았던 순간", padding + 56, 760);
    ctx.fillStyle = "#414c3e";
    ctx.font = '37px "Gowun Dodum", sans-serif';
    wrappedText(ctx, state.bestMoment || "함께한 모든 순간", padding + 56, 820, width - padding * 2 - 112, 50);
    ctx.fillStyle = "#919582";
    ctx.font = '27px "Gowun Dodum", sans-serif';
    ctx.fillText("오늘의 수집 기록", padding + 56, 930);
    ctx.fillStyle = "#414c3e";
    ctx.font = '37px "Gowun Dodum", sans-serif';
    ctx.fillText(`발견 ${state.missions.length}개 · 숨은 하트 ${state.stars.length}개`, padding + 56, 990);
    ctx.fillStyle = "#919582";
    ctx.font = '27px "Gowun Dodum", sans-serif';
    ctx.fillText("미래의 우리에게", padding + 56, 1090);
    ctx.fillStyle = "#6a745b";
    ctx.font = '36px "Gowun Dodum", sans-serif';
    wrappedText(ctx, state.wish || "내년에도 같은 파티원으로!", padding + 56, 1150, width - padding * 2 - 112, 51);
    ctx.textAlign = "center";
    ctx.fillStyle = "#a75258";
    ctx.font = '30px "Gowun Dodum", sans-serif';
    ctx.fillText("삐약의 모든 소원이 이루어지길 ♡", width / 2, 1375);
  }
  return canvas;
}

async function saveKeepsake(kind) {
  if (document.fonts?.ready) await document.fonts.ready;
  const canvas = keepsakeCanvas(kind);
  const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
  if (!blob) return showToast("이미지를 만드는 데 실패했어요. 다시 시도해주세요.");
  const names = {
    memory: "삐약의-생일-기억.png",
    letter: "뇽뇽이의-편지.png",
    gift: "더풋샵-힐링-충전권.png"
  };
  const file = new File([blob], names[kind] || names.memory, { type: "image/png" });
  try {
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: "삐약이의 생일 대모험" });
      return showToast("이미지 공유를 완료했어요 ♡");
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("이미지를 저장했어요 ♡");
  } catch (error) {
    if (error?.name !== "AbortError") showToast("이미지를 저장하지 못했어요. 다시 시도해주세요.");
  }
}

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function confetti() {
  const root = document.querySelector("#confetti");
  const colors = ["#ffd95a", "#ff8fa8", "#9de2c5", "#cbc4f5", "#fffdf5"];
  root.innerHTML = Array.from({ length: 55 }, (_, i) => `<i class="confetti-piece" style="left:${(i * 37) % 100}%;background:${colors[i % colors.length]};animation-delay:${(i % 9) * .08}s"></i>`).join("");
  window.setTimeout(() => { root.innerHTML = ""; }, 3300);
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target || target.disabled) return;
  const { action, value, index, message, kind } = target.dataset;

  if (action === "next") next();
  if (action === "chooseAndNext") respond(value);
  if (action === "findStar") {
    if (!state.stars.includes(state.step)) setState({ stars: [...state.stars, state.step] });
    showToast(`뇽뇽이 숨겨둔 마음 발견! ${state.stars.length} / 3 ♡`);
  }
  if (action === "rainCheck") { setState({ rainCheck: true, step: 13 }); showToast("다음 하늘 데이트 약속을 보상함에 넣었어요 ♡"); }
  if (action === "giftToLetter") setState({ step: 15, letterRevealed: true });
  if (action === "saveKeepsake") saveKeepsake(kind);
  if (action === "candle") {
    const blownCandles = [...new Set([...state.blownCandles, Number(index)])];
    setState({ candles: blownCandles.length, blownCandles });
    if (state.candles === 3) { confetti(); showToast("삐약의 모든 소원이 이루어지길 ♡"); }
  }
  if (action === "selectMood") setState({ mood: value, step: 2 });
  if (action === "selectCafeTitle") setState({ cafeTitle: value, step: 10 });
  if (action === "toggleMission") {
    const mission = Number(index);
    const missions = state.missions.includes(mission)
      ? state.missions.filter((item) => item !== mission)
      : [...state.missions, mission];
    setState({ missions });
  }
  if (action === "tapBalloon") {
    const balloonTaps = Math.min(8, state.balloonTaps + 1);
    state = { ...state, balloonTaps };
    saveState();
    if (balloonTaps === 8) {
      confetti();
      showToast("하늘 산책권이 해금되었습니다! 🎈");
    }
    render();
  }
  if (action === "selectBestMoment") setState({ bestMoment: value, step: 14 });
  if (action === "selectRewardFirst") {
    setState({ rewardFirst: value, giftConfirmed: false, letterRevealed: value === "letter", step: value === "gift" ? 16 : 15 });
  }
  if (action === "confirmRewardChoice") {
    if (value === "gift") {
      setState({ giftConfirmed: true });
      app.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (value === "letter") setState({ rewardFirst: "letter", letterRevealed: true, step: 15 });
  }
  if (action === "revealLetter") setState({ letterRevealed: true });
  if (action === "selectRecovery") setState({ recoveryChoice: value, step: 17 });
  if (action === "toast") showToast(message);
  if (action === "finish") {
    setState({ finished: true, step: 17 });
    app.scrollTo({ top: 0, behavior: "smooth" });
    confetti();
    showToast("다음 생일도 같은 파티원과 계속하기 ♡");
  }
});

app.addEventListener("change", (event) => {
  if (event.target.dataset.action !== "strengthCheck") return;
  const strengthsDone = [...state.strengthsDone];
  strengthsDone[Number(event.target.dataset.index)] = event.target.checked;
  setState({ strengthsDone });
});

const dialog = document.querySelector("#menu-dialog");
document.querySelector("#reaction-continue").addEventListener("click", () => { document.querySelector("#reaction-dialog").close(); next(); });
app.addEventListener("input", event => {
  if (event.target.id !== "wish") return;
  state.wish = event.target.value.slice(0, 200); saveState();
  document.querySelector("#wish-status").textContent = "우리의 타임캡슐에 저장했어요 ♡";
});
document.querySelector("#menu-button").addEventListener("click", () => dialog.showModal());
document.querySelector("#close-menu").addEventListener("click", () => dialog.close());
document.querySelector("#reset-game").addEventListener("click", () => {
  if (!window.confirm("지금까지의 진행 상황을 지우고 처음부터 시작할까요?")) return;
  if (!qaParams.has("qaStep")) { try { localStorage.removeItem(STORAGE_KEY); } catch {} }
  state = freshState();
  dialog.close();
  render();
  showToast("처음부터 다시 시작합니다.");
});

const unlockDialog = document.querySelector("#unlock-dialog");
const unlockForm = document.querySelector("#unlock-form");
let gameStarted = false;

async function decryptConfig(key) {
  const decrypted = await window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv: fromBase64(PROTECTED_CONFIG.iv) },
    key,
    fromBase64(PROTECTED_CONFIG.data)
  );
  return JSON.parse(new TextDecoder().decode(decrypted));
}

async function keyFromPin(pin) {
  const pinKey = await window.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(pin),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: fromBase64(PROTECTED_CONFIG.salt),
      iterations: PROTECTED_CONFIG.iterations,
      hash: "SHA-256"
    },
    pinKey,
    { name: "AES-GCM", length: 256 },
    true,
    ["decrypt"]
  );
}

function startGame(config) {
  CONFIG = config;
  gameStarted = true;
  if (unlockDialog.open) unlockDialog.close();
  render();
}

async function unlockWithPin(pin, remember) {
  const key = await keyFromPin(pin);
  const config = await decryptConfig(key);
  if (remember) {
    const exported = await window.crypto.subtle.exportKey("raw", key);
    localStorage.setItem(UNLOCK_KEY, toBase64(exported));
  } else {
    localStorage.removeItem(UNLOCK_KEY);
  }
  startGame(config);
}

async function unlockFromSavedKey() {
  const saved = localStorage.getItem(UNLOCK_KEY);
  if (!saved) return false;
  try {
    const key = await window.crypto.subtle.importKey(
      "raw",
      fromBase64(saved),
      { name: "AES-GCM" },
      false,
      ["decrypt"]
    );
    startGame(await decryptConfig(key));
    return true;
  } catch {
    localStorage.removeItem(UNLOCK_KEY);
    return false;
  }
}

unlockForm.addEventListener("submit", async event => {
  event.preventDefault();
  const pin = document.querySelector("#unlock-pin").value;
  const error = document.querySelector("#unlock-error");
  const button = unlockForm.querySelector("button[type=submit]");
  error.textContent = "";
  button.disabled = true;
  button.textContent = "마음을 확인하고 있어요…";
  try {
    await unlockWithPin(pin, document.querySelector("#remember-unlock").checked);
  } catch {
    error.textContent = "우리만 아는 숫자가 아닌 것 같아요.";
    document.querySelector("#unlock-pin").select();
  } finally {
    button.disabled = false;
    button.textContent = "생일 대모험 시작하기 →";
  }
});

unlockDialog.addEventListener("cancel", event => event.preventDefault());

async function boot() {
  if (!window.crypto?.subtle) {
    document.querySelector("#unlock-error").textContent = "안전한 HTTPS 주소에서 다시 열어주세요.";
    unlockDialog.showModal();
    return;
  }
  if (await unlockFromSavedKey() || gameStarted) return;
  unlockDialog.showModal();
  window.setTimeout(() => document.querySelector("#unlock-pin").focus(), 100);
}

if (window.navigator?.serviceWorker && window.location.protocol !== "file:") {
  window.navigator.serviceWorker.register("./sw.js").catch(() => {});
}

boot();
