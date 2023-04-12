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
const packedListElement = document.getElementById("packedList");
const bagSizeElement = document.getElementById("bagSize");

let vacationBag = [];

for (let item of vacationItems) {
  const itemElement = document.createElement("div");
  itemElement.innerText = item;
  itemElement.classList.add("item");
  itemElement.onclick = addToBagList;
  itemListElement.appendChild(itemElement);
}

function addToBagList() {
  vacationBag.push(this.innerText);

  const bagElement = document.createElement("div");

  const spanElement = document.createElement("span");
  spanElement.innerText = this.innerText;
  bagElement.appendChild(spanElement);

  const button = document.createElement("button");
  button.classList.add("regretButton");
  button.innerText = "regret";
  button.onclick = packedInBag;
  bagElement.appendChild(button);

  packedListElement.appendChild(bagElement);
  bagSize();
}

function packedInBag() {
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
