const urlParams = new URLSearchParams(window.location.search);
const codeToExecute = urlParams.get('run');
var result = "";
try {
  result = Function(codeToExecute);
} catch (error) {
  result = "Error: " + toString(error)
}
document.getElementById("returnspan").innerHTML = result;