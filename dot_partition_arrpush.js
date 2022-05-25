//Array implementation
// 10x times slower, but why? Shouldnt push be cheaper than string concatenation?

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
    answer.push([text[0],"."], [text[0]]);
    return a(text.slice(1), answer);
  }
  function a(text, answer) {
    if (text.length > 1) {
      let answer_tmp = JSON.parse(JSON.stringify(answer));//here?
      answer.map((e) => e.push(text[0],"." ));
      answer_tmp.map((e) => e.push(text[0] ));
      answer = answer.concat(answer_tmp);
      return a(text.slice(1), answer);
    } else {
      answer.map((e) => e.push(text[0] ));
      return answer.map(e => e.join(""));//here?
    }
  }
}

console.log(dot_partition(text));

// dot_partition(text)
// console.timeEnd("answer time");