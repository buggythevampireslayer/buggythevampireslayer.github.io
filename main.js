const urlParams = new URLSearchParams(window.location.search);
const codeToExecute = urlParams.get('run');
console.log(urlParams);
var result = " ";
try {
  result = eval(codeToExecute);
  result = toString(result);
  if (result == "[object Undefined]") {
    result == "Error: Object Undefined";
  }
} catch (error) {
  result = "Error: " + toString(error);
}

document.getElementById("return_span").innerHTML = result;