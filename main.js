const urlParams = new URLSearchParams(window.location.search);
const codeToExecute = decodeURIComponent(urlParams.get('run')).replace(";","\n");


try {
  functionToRun = new Function(codeToExecute)
  const result = functionToRun();
  document.getElementById("return_span").innerHTML = result;
}
catch (error) {
  const result = toString(error);
  console.log("Caught Error")
  console.log(error)
  document.getElementById("return_span").innerHTML = result;
}