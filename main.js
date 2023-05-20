const urlParams = new URLSearchParams(window.location.search);
const codeToExecute = decodeURIComponent(urlParams.get('run'));

const linesOfCode = codeToExecute.split("%OA");

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