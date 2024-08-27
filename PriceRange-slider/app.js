let minimumRange = document.querySelector(".min-input");
let maximumRange = document.querySelector(".max-input");
let range1 = document.querySelector(".rangeslider1");
let range2 = document.querySelector(".rangeslider2");

range1.addEventListener("input", (evt) => {
  if (evt.target.value < maximumRange.value) {
    minimumRange.value = evt.target.value;
  } else {
    range1.max = maximumRange.value;
  }
});
range2.addEventListener("input", (evt) => {
  if (evt.target.value > minimumRange.value) {
    maximumRange.value = evt.target.value;
  } else {
    range2.min = minimumRange.value;
  }
});
minimumRange.addEventListener("input", (evt) => {
  if (evt.target.value >= 0) {
    range1.value = evt.target.value;
  } else {
    alert("Minimum Range cannot be less than 0");
  }
});
maximumRange.addEventListener("input", (evt) => {
  if (evt.target.value <= 10000) {
    range2.value = evt.target.value;
  } else {
    alert("Maximum Range cannot be more than 10000");
  }
});
