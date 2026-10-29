// Small hand lexicons for rule signals. Stems match word starts ("terrif" -> terrified, terrifying).

const L = {
  joy: "laugh grin smil beam delight happy glad joy thrill cheer giggl chuckl relie excit celebrat hooray yay wonderful great awesome fantastic love-it brilliant perfect proud",
  sadness: "cry cries cried tear sob weep wept grief griev mourn sad sorrow miss lonely alone heartbr sigh slump hollow numb lost regret sorry funeral dead died loss",
  anger: "angr furious fury rage enrag livid seeth snap snarl shout yell scream slam glare hiss curse damn hell bastard shut idiot hate punch shove spit growl bark stomp storm",
  fear: "afraid fear scare terrif panic trembl shak frozen freez gasp flinch dread nervous anxious hide hid hiding run flee please don't help oh-god whimper backs-away pale sweat",
  surprise: "surpris shock stun startl gasp what? wait really? sudden blink jaw stare double-take whoa wow unexpected can't-believe",
  disgust: "disgust gross revolt sick nause vomit retch gag recoil sneer stench stink filth rotten vile repuls ugh",
  affection: "hug embrac kiss caress hold hand tender gentl soft love darling sweetheart honey dear warm smile-at touch strok cuddl miss-you care",
  threat: "gun knife blade pistol rifle trigger blood kill murder die dead death shoot shot bomb explod threat danger hostage weapon wound bleed choke strangl attack chase hunt trap ambush poison fire burn fall edge drown",
  conflict: "no not never won't can't refuse demand insist accus lie liar betray argu fight confront threaten warn ultimat deny blame fault",
  calm: "calm quiet peace gentl slow relax rest sleep sip stretch yawn idle lazy casual sunny breeze",
  urgency: "now hurry quick fast run go! move! clock minutes seconds deadline faster late too-late before",
};

export const LEX = {};
for (const [k, v] of Object.entries(L)) LEX[k] = v.split(/\s+/).map((w) => w.replace(/-/g, " "));
export const EMOTIONS = ["neutral", "joy", "sadness", "anger", "fear", "surprise", "disgust", "affection"];

const RE = {};
for (const [k, words] of Object.entries(LEX)) {
  const esc = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  RE[k] = new RegExp(`(?:^|[^a-z'])(?:${esc.join("|")})`, "gi");
}

export function lexCount(text, key) {
  const m = text.match(RE[key]);
  return m ? m.length : 0;
}

export const NEGATION = /\b(not|no|never|don't|won't|can't|didn't|isn't|aren't|wasn't|nothing|nobody)\b/gi;
export const INTENSIFIER = /\b(very|so|really|too|completely|totally|absolutely|utterly)\b/gi;
export const GROUP_ADDR = /\b(everyone|everybody|you all|y'all|you guys|guys|folks|people|ladies|gentlemen|team|all of you|you two|you both)\b/i;
export const CUT_WORDS = /^(suddenly|then|later|meanwhile|finally|at last|moments later|without warning|just then|instantly|abruptly|now)\b/i;
export const IMPERATIVE = /^(get|go|stop|wait|move|run|give|put|drop|listen|look|come|stay|don't|shut|hold|tell|take|leave|open|sit|stand|help)\b/i;

export function count(re, text) {
  const m = text.match(re);
  return m ? m.length : 0;
}
