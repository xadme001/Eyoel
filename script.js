const psb = document.getElementById("previousSlide");
const nsb = document.getElementById("nextSlide");
const hsb = document.getElementById("homeSlide");
const esb = document.getElementById("exitSlide");
const chv = document.querySelector(".presentation .topic:first-child");
const pos = document.querySelector(".titles .position");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
var cs = 0;

nsb.addEventListener("click", (e) => {
  if (cs < (chv.childElementCount - 1)) ++cs;
  updateSlide(cs);
});

psb.addEventListener("click", (e) => {
  if (cs != 0) --cs;
  updateSlide(cs);
});

hsb.addEventListener("click", (e) => {
  cs = 0;
  updateSlide(cs);
});

esb.addEventListener("click", (e) => {
});

searchButton.addEventListener("click", (e) => {
  const searchText = searchInput.value.toLowerCase();
  for (let i = 0; i < chv.childElementCount; i++) {
    const slideText = chv.children[i].textContent.toLowerCase();
    if (slideText.includes(searchText)) {
      cs = i;
      updateSlide(cs);
      break;
    }
  }
  searchInput.value = "";
});

function updateSlide(cs) {
  pos.innerHTML = cs + 1;
  chv.style.transform = "translateX(" + (-100 * cs) + "vw)";
}
