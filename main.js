const urlParams = new URLSearchParams(window.location.search);
const codeToExecute = decodeURIComponent(urlParams.get('run'));
console.log(urlParams);

const result = eval(codeToExecute)

document.getElementById("return_span").innerHTML = toString(result);