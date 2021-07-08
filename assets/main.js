// variables
var button = document.getElementById("btn");
var select = document.getElementById("songs");
var input = document.getElementById("input");
var options =document.getElementsByTagName("option");
var optionFiveDefault = "More on Spotify";
var form = document.querySelector("form");
var input2 = document.getElementById("input2");

// event onload
window.onload = () => {
  console.log("Página e scripts carregados com sucesso !");
};

// event onclick
button.addEventListener('click', () => {
  window.location.href = "https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxy4?si=KGqRHtW8R4m_mUWCOCk-Qg";
});

// event hover -> calls mouseover on javascript
button.addEventListener("mouseover", () => {
  button.style.cursor = "pointer";
});
// the inverse
button.addEventListener("mouseleave", () => {
  button.style.cursor = "default";
});

// event change (OBS: utilizando arrow function o this.value retorna undefined)
select.addEventListener("change", function() {
  console.log(this.value);
});

// event blur - quando saio de algo, no caso o select
select.addEventListener("blur", () => {
  console.log("Evento blur acionado!");
});

// event keyup
input.addEventListener("keyup", function() {
  var value = this.value;
  // next line: se value for diferente de vazio, (?) -> então recebe value, (:) -> senão, recebe optionFiveDefault
  /* options[5].text = value !== "" ? value : optionFiveDefault; */
  if (value !== "") {
    options[5].text = value;
  } else {
    options[5].text = optionFiveDefault;
  };
});

// event keypress // e = event
input.addEventListener("keypress", function(e) {
  if (e.keyCode == 13) {
    console.log("tecla enter pressionada !");
  };
});

// event submit
form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (input2.value !== "") {
    console.log("esses dados deveriam ser enviados ao back-end, caso existisse um ");
  } else {
    alert("the text area is not filled !");
  };
});
