let elem = document.getElementById("element");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".sliders input");

inputs.forEach((inp) => inp.addEventListener("input", generateShadow));

function generateShadow() {
  let hShadow = document.getElementById("h-shadow").value;
  let vShadow = document.getElementById("v-shadow").value;
  let blurRadius = document.getElementById("blur-radius").value;
  let spreadRadius = document.getElementById("spread-radius").value;
  let shadowColor = document.getElementById("shadow-color").value;
  let shadowColorOpacity = document.getElementById(
    "shadow-color-opacity"
  ).value;
  let shadowInset = document.getElementById("shadow-inset").checked;


// Usando el operador ternario para verificar si INSET esta activado 
  //Si está marcado, agregamos la funcion 

  let boxShadow = shadowInset
    ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(
        shadowColor,
        shadowColorOpacity
      )}`
    : `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(
        shadowColor,
        shadowColorOpacity
      )}`;
  elem.style.boxShadow = boxShadow;
  code.textContent = `box-shadow: ${boxShadow};`;
}

//Converting Hex value to rgba
function hexToRgba(shadowColor, shadowColorOpacity) {
    let r = parseInt(shadowColor.substr(1, 2), 16);
    let g = parseInt(shadowColor.substr(3, 2), 16);
    let b = parseInt(shadowColor.substr(5, 2), 16);
    return `rgba(${r},${g},${b},${shadowColorOpacity})`;
  }


//generador de sombra
function copyCode() {
  code.select();
  document.execCommand("copy");
  alert("Code Copied To Clipboard");
}

////Llama a la función generateShadow en cada recarga de página
window.onload = generateShadow();