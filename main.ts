import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "Last Text at One Percent".
// The last text a phone sends at one percent battery, under 200
// characters, in the dying phone's own voice. Joke first, then
// voice, then how little the message wastes. The phone says goodbye
// like a soldier — honors the charger, admits 1% was never enough
// time. Funny, in-voice, tight — and the charger never answers.
const MAX_CHARS = 200;
const MESSAGE =
  "It's been an honor serving you. Please tell my charger I loved her, and that 1% was never enough time to say goodbye.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
