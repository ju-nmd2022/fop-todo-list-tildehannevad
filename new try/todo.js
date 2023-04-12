const vacationItems = [
  "🎧",
  "⛺️",
  "🪥",
  "✂️",
  "📕",
  "🧸",
  "📱",
  "🎲",
  "🎷",
  "🤿",
  "🍭",
  "🕶️",
  "🌂",
  "🧢",
  "👡",
];
const itemListElement = document.getElementById("itemList");
const chooseListElement = document.getElementById("bringList");
const packedListElement = document.getElementById("packedList");
const bagSizeElement = document.getElementById("bagSize");

let vacationBag = [];
let bringList = [];

for (let item of vacationItems) {
  const itemElement = document.createElement("div");
  itemElement.innerText = item;
  itemElement.classList.add("item");
  itemElement.onclick = addToChooseList;
  itemListElement.appendChild(itemElement);
}

function addToChooseList() {
  bringList.push(this.innerText);

  const chooseElement = document.createElement("div");

  const spanElement = document.createElement("span");
  spanElement.innerText = this.innerText;
  chooseElement.appendChild(spanElement);

  const checkBox = document.createElement("input");
  checkBox.type = "radio";
  checkBox.checked = false;

  checkBox.addEventListener("click", () => {
    checkBox.checked = true;
  });

  const button = document.createElement("button");
  button.classList.add("regretButton");
  button.innerText = "regret";
  button.onclick = writtenOnList;
  chooseElement.appendChild(button);

  chooseListElement.appendChild(chooseElement);
}

function writtenOnList() {
  const vacationElement = this.parentNode;

  const itemElement = vacationElement.querySelector("span");
  const emoji = itemElement.innerText;
  const emojiIndex = vacationBag.indexOf(emoji);
  vacationBag.splice(emojiIndex, 1);

  vacationElement.parentNode.removeChild(vacationElement);
  bagSize();
}

function bagSize() {
  if (vacationBag.length === 0) {
    bagSizeElement.innerText = "Bag size: unpacked";
  }
  if (vacationBag.length === 1) {
    bagSizeElement.innerText = "Bag size: tiny";
  }
  if (vacationBag.length === 5) {
    bagSizeElement.innerText = "Bag size: bigger";
  }
  if (vacationBag.length === 7) {
    bagSizeElement.innerText = "Bag size: even bigger";
  }
  if (vacationBag.length === 10) {
    bagSizeElement.innerText = "Bag size: huge";
  }
  if (vacationBag.length === 13) {
    bagSizeElement.innerText = "Bag size: reeeeally big";
  }
  if (vacationBag.length === 15) {
    bagSizeElement.innerText = "Bag size: ENOURMOUS";
  }
}
