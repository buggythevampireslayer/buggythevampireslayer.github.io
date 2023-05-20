const urlParams = new URLSearchParams(window.location.search);
const codeToExecute = urlParams.get('run');

var linesOfCode = codeToExecute.split("%OA");
linesOfCode.forEach((line, i) => {
  linesOfCode[i] = decodeURIComponent(line)
})

try {
  linesOfCode.forEach((line) => {
    const result = eval(line);
    document.getElementById("return_span").innerHTML += toString(result);
  });
} catch (error) {
  const result = toString(error);
  console.log("Caught Error")
  document.getElementById("return_span").innerHTML = result;
}