let download = document.querySelector('#download');
let gif = document.querySelector('#gif');
let downlded = document.querySelector('#downlded');

download.addEventListener("click", myFunction);

function downloaded() {
  gif.style.display = "none";
  downlded.style.display = "block";
}

function myFunction() {
  download.style.display = "none";
  gif.style.display = "block";
  setInterval(downloaded, 3000)
}