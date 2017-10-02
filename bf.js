//JavaScript Brainf*** Interpreter By UDXS(Davit Markarian)
//More @ udxs.me
var program = prompt("Enter the Program").split("");
var input = prompt("Enter the input");
var executable = [];
var output = "";
var curInput = 0;
var curPointer = 0;
var data = new Uint8Array(65536);

function pINC() {
  curPointer++;
  if (curPointer > 65535) {
    curPointer = 0;
  }
}

function pDEC() {
  curPointer--;
  if (curPointer < 0) {
    curPointer = 65535;
  }
}

function dINC() {
  data[curPointer]++;
  if (data[curPointer] > 255) {
    data[curPointer] = 0;
  }
}

function dDEC() {
  data[curPointer]--;
  if (data[curPointer] < 0) {
    data[curPointer] = 255;
  }
}

function out() {
  output += String.fromCharCode(data[curPointer]);
}

function inp() {
  data[curPointer] = input.charCodeAt(curInput);
  curInput++;
}

for (var i = 0; i < program.length; i++) {
  switch (program[i]) {
    case ">":
      executable.push("pINC();");
      break;
    case "<":
      executable.push("pDEC();");
      break;
    case "+":
      executable.push("dINC();");
      break;
    case "-":
      executable.push("dDEC();");
      break;
    case ".":
      executable.push("out();");
      break;
    case ",":
      executable.push("inp();");
      break;
    case "[":
      executable.push("while(data[curPointer]){");
      break;
    case "]":
      executable.push("};");
      break;
    default:
  }
}
executable = executable.join("");
eval(executable);
alert(output);