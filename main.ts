import { mkdirSync, writeFileSync } from "node:fs";

// Last Text at One Percent entry — the last text a phone sends at
// one percent battery, under 200 characters, in the dying phone's
// own voice. Judge brief: joke first, then voice, then how little
// the message wastes.
// Chosen line: the phone says goodbye like a soldier — honors the
// charger, admits 1% was never enough time. Funny, in-voice, tight.
const LINE =
  "It's been an honor serving you. Please tell my charger I loved her, and that 1% was never enough time to say goodbye.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
