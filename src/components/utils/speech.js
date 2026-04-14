export const speak = (text) => {
  if (!window.speechSynthesis) return;

  const msg = new SpeechSynthesisUtterance(text);
  msg.rate = 1;
  msg.pitch = 1;
  msg.volume = 1;

  window.speechSynthesis.cancel(); // stop previous
  window.speechSynthesis.speak(msg);
};