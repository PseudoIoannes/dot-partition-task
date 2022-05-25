//String concatenation implementation, shouldn't it be slow? Faster than array implementation

const prompt = require("prompt-sync")({ sigint: true });
let text = prompt("Enter string ");
text = text.split("");

// console.time("answer time")
// let text = "abcdefghijklmnopqr"

function dot_partition(text) {
  let answer = [];
  if (text.length <= 1) {
    return text;
  } else {
    answer.push(text[0] +".", text[0]);
    return a(text.slice(1), answer);
  }
  function a(text, answer) {
    if (text.length > 1) {
      let answer_tmp = answer;
      answer = answer.map((e) => e + text[0] + ".");
      answer_tmp = answer_tmp.map((e) => e + text[0]);
      answer = answer.concat(answer_tmp);
      return a(text.slice(1), answer);
    } else {
      answer = answer.map((e) => e + text[0]);
      return answer;
    }
  }
}

console.log(dot_partition(text));

// dot_partition(text)
// console.timeEnd("answer time");