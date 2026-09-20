/**
 * Timer sounds, generated rather than loaded.
 *
 * Synthesising these with the Web Audio API keeps the app a single bundle with no
 * media files, which matters because it has to work offline on a phone.
 */

let context: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    context ??= new AudioContext();
    // Browsers suspend the context until a user gesture; a session always starts with
    // a tap, so resuming here is enough.
    if (context.state === 'suspended') void context.resume();
    return context;
  } catch {
    return null;
  }
}

function tone(frequency: number, durationMs: number, delayMs = 0, gain = 0.09): void {
  const ctx = getContext();
  if (ctx === null) return;

  const start = ctx.currentTime + delayMs / 1000;
  const end = start + durationMs / 1000;

  const osc = ctx.createOscillator();
  const amp = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.value = frequency;

  // Short ramps, so it reads as a soft chime rather than a click.
  amp.gain.setValueAtTime(0, start);
  amp.gain.linearRampToValueAtTime(gain, start + 0.015);
  amp.gain.exponentialRampToValueAtTime(0.0001, end);

  osc.connect(amp).connect(ctx.destination);
  osc.start(start);
  osc.stop(end + 0.02);
}

/** Ticks down the last three seconds of a hold. */
export const countdownTick = (): void => tone(660, 90);
/** One exercise finished, moving to the next. */
export const advanceChime = (): void => {
  tone(784, 160);
  tone(1047, 220, 140);
};
/** Halfway through a per-side exercise — swap legs. */
export const switchSidesChime = (): void => {
  tone(523, 140);
  tone(523, 140, 200);
};
/** Whole session done. */
export const finishChime = (): void => {
  tone(523, 180);
  tone(659, 180, 160);
  tone(784, 320, 320);
};

/** Spoken cue, when the user has turned voice on. Free, and no assets to ship. */
export function speak(text: string): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.volume = 0.8;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  } catch {
    // Voices unavailable. Silence is an acceptable outcome.
  }
}

/** Unlock audio on the first user gesture, before any timer needs it. */
export function primeAudio(): void {
  getContext();
}
