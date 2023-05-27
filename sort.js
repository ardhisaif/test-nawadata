const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isVowel(char) {
  return /[aeiou]/.test(char);
}

readline.question(`Input one line of words (S) :`, (word) => {
  let vowels = [];
  let consonants = [];

  word = word.replace(/\s/g, "").toLowerCase();

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (isVowel(char)) {
      if (vowels.includes(char)) {
        const index = vowels.findIndex((element) => element === char);
        vowels[index] += char;
      } else {
        vowels.push(char);
      }
    } else {
      if (consonants.includes(char)) {
        const index = consonants.findIndex((element) => element === char);
        consonants[index] += char;
      } else {
        consonants.push(char);
      }
    }
  }

  vowels = vowels.join("")
  consonants = consonants.join("")

  console.log("Vowel Characters:");
  console.log(vowels);
  console.log("Consonant Characters:");
  console.log(consonants);

  readline.close();
});
