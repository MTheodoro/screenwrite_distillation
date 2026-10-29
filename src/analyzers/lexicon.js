// Small hand lexicons for rule signals. Stems match word starts ("terrif" -> terrified, terrifying).

const L = {
  joy: "laugh grin smil beam delight happy glad joy thrill cheer giggl chuckl relie excit celebrat hooray yay wonderful great awesome fantastic love-it brilliant perfect proud",
  sadness: "cry cries cried tear sob weep wept grief griev mourn sad sorrow miss lonely alone heartbr sigh slump hollow numb lost regret sorry funeral dead died loss",
  anger: "angr furious fury rage enrag livid seeth snap snarl shout yell scream slam glare hiss curse damn hell bastard shut idiot hate fuck shit asshole goddamn pissed punch shove spit growl bark stomp storm",
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

// Words that name or unmistakably express an emotion ("furious", "I hate", "terrified", "sobbing"). When one of these
// is in a line (not negated), the line is not neutral, whatever the model says.
const EXPLICIT = {
  joy: /\b(happy|happily|happiness|joy|joyful|joyous|overjoyed|delighted|thrilled|ecstatic|elated|laugh(s|ing|ed)?|giggl\w*|beam(s|ing)|cheer(s|ing)|celebrat\w*|yay|hooray)\b/i,
  sadness: /\b(sad|sadly|sadness|grief|griev\w*|mourn\w*|sob(s|bing|bed)?|weep(s|ing)?|wept|cr(y|ies|ied|ying)|tears?|heartbroken|miserable|depressed|despair\w*|sorrow\w*)\b/i,
  anger: /\b(angry|angrily|anger|furious|fury|rage[sd]?|raging|enraged|livid|seeth\w*|hate[sd]?|hating|hatred|pissed|fuck\w*|goddamn|bastard|asshole|screams? at|yell(s|ing)? at|snarl\w*)\b/i,
  fear: /\b(afraid|scared|terrified|terror|frightened|fear(s|ful|ed)?|panic\w*|petrified|dread\w*|horrified|trembl\w*)\b/i,
  surprise: /\b(surprised?|surprising|shock(ed|s)?|stunned|astonish\w*|amazed|startled|gasps)\b/i,
  disgust: /\b(disgust\w*|gross|revolting|repuls\w*|nause\w*|vomit\w*|retch\w*|sickening)\b/i,
  affection: /\b(loves?|loving|adores?|adoring|tender(ly)?|embrac\w*|hugs?|hugging|kiss(es|ing)?|cuddl\w*|darling|sweetheart)\b/i,
};
const NEG_BEFORE = /\b(not|no|never|don't|doesn't|didn't|isn't|wasn't|aren't|without|hardly)\s+(\w+\s+)?$/i;
const EXPLICIT_G = Object.entries(EXPLICIT).map(([k, re]) => [k, new RegExp(re.source, "gi")]);
export function explicitEmotion(text) {
  let best = null, bestN = 0;
  for (const [emo, re] of EXPLICIT_G) {
    let n = 0;
    for (const m of text.matchAll(re)) if (!NEG_BEFORE.test(text.slice(Math.max(0, m.index - 24), m.index))) n++;
    if (n > bestN) { best = emo; bestN = n; }
  }
  return best ? [best, bestN] : null;
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
