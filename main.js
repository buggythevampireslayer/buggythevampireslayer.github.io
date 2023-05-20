const urlParams = new URLSearchParams(window.location.search);
const codeToExecute = decodeURIComponents(urlParams.get('run'));

var linesOfCode = codeToExecute.split(";");


try {
  a = new Function(linesOfCode)
  const result = a();
  document.getElementById("return_span").innerHTML += toString(result);
}
catch (error) {
  const result = toString(error);
  console.log("Caught Error")
  console.log(error)
  document.getElementById("return_span").innerHTML = result;
}