let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

let prevMsg = document.getElementById("prev-msg");

function save() {
  prevMsg.textContent += count + " - ";
  count = 0;
  countEl.textContent = 0;
}
