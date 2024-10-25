const setOfWords = [
  `Apple and orange trees line the mountain paths near the river. A chair and table sit under the bottle-green 
   leaves, creating a peaceful spot read about planets, science, or history. With a laptop open, phone Flowers
   and trees are in full bloom, animals roam freely, and machines rumble on the nearby road.`,
  `Trucks pass, while bicycles, paper, and books fill the library with music and inspiration. Instruments like 
   guitars and pianos create rhythm, while sounds of thunderstorms, lightning, and rain fill the air. The castle 
   atop the hill stands against the sunset, casting shadows. Colors like blue, green, and red as night falls.`,
 
];

const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

const playGame = () => {
  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  msg.innerText = setOfWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  console.log(totalTime);

  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);

  let speed = Math.floor((wordCount / totalTime) * 60);

  let finalMsg = " You typed total at " + speed + " words per minutes. ";

  finalMsg += compareWords(msg.innerText, totalStr);

  msg.innerText = finalMsg;
};

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;

  words1.forEach(function (item, index) {
    if (item == words2[index]) {
      cnt++;
    }
  });

  let errorWords = words1.length - cnt;
  return (
    cnt +
    " correct out of " +
    words1.length +
    " words and the total number of error are " +
    errorWords +
    "."
  );
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  console.log(response);
  return response;
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    typeWords.disabled = false;
    playGame();
    typeWords.value = "";
  } else if (this.innerText == "Done") {
    btn.innerText = "Start";
    endPlay();
  }
});
