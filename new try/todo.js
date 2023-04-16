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

// Showing vacation items on the webpage
for (let item of vacationItems) {
  const itemElement = document.createElement("div");
  itemElement.innerText = item;
  itemElement.classList.add("item");
  itemElement.onclick = addToBringList;
  itemListElement.appendChild(itemElement);
}

// Function to update localStorage with the latest data
function updateLocalStorage() {
  localStorage.setItem("vacationBag", JSON.stringify(vacationBag));
  localStorage.setItem("bringList", JSON.stringify(bringList));
}

// Add vacationItem to bringList
function addToBringList() {
  bringList.push(this.innerText);

  const bringElement = document.createElement("div");

  const spanElement = document.createElement("span");
  spanElement.innerText = this.innerText;
  bringElement.appendChild(spanElement);

  const checkBox = document.createElement("input");
  checkBox.type = "radio";
  checkBox.checked = false;

  checkBox.addEventListener("click", () => {
    addToBag.apply(this);

    chooseListElement.removeChild(bringElement);
  });

  bringElement.appendChild(checkBox);

  chooseListElement.appendChild(bringElement);

  updateLocalStorage();
}

// Add vacationItem to vacationBag
function addToBag() {
  vacationBag.push(this.innerText);

  const packedElement = document.createElement("div");

  const spanElement = document.createElement("span");
  spanElement.innerText = this.innerText;
  packedElement.appendChild(spanElement);

  const button = document.createElement("button");
  button.classList.add("regretButton");
  button.innerText = "regret";
  button.onclick = packedInBag;
  packedElement.appendChild(button);

  packedListElement.appendChild(packedElement);

  bagSize();

  updateLocalStorage();
}

// Remove vacationItem from vacationBag
function removedFromBag() {
  const vacationElement = this.parentNode;

  const itemElement = vacationElement.querySelector("span");
  const emoji = itemElement.innerText;
  const emojiIndex = vacationBag.indexOf(emoji);
  vacationBag.splice(emojiIndex, 1);

  vacationElement.parentNode.removeChild(vacationElement);

  bagSize();

  updateLocalStorage();
}

// Increases the bagSize when vacationItem(s) are added
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

  updateLocalStorage();
}
