
const sentence = "Hello I am a noob, Hopefully one day I'll be a non-noob." + "\n";
const interval = 150;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, i * interval);
}