const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {
  removeBorderHighlight();
  removeShow();
  // Add border to current tab
  this.classList.add("tab-border");
  this.classList.add("highlight");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorderHighlight() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
  tabItems.forEach(item => item.classList.remove("highlight"));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));

// Accordions
const accordions = document.querySelectorAll(".accordion");
const lists = document.querySelectorAll("ul");

// function activate(e) {
//   accordions.forEach(acc => acc.classList.toggle("active"));
//   lists.forEach(list => list.classList.toggle("show"));
// }

function activate(e) {
  let currentAccordion = e.currentTarget;
  let currentList = currentAccordion.nextElementSibling;
  closeOthers(currentAccordion, currentList);
  currentAccordion.classList.toggle("active");
  currentList.classList.toggle("show");
}

function closeOthers(currentAcc, currentList) {
  accordions.forEach(acc => {
    if (currentAcc != acc) acc.classList.remove("active");
    var list = acc.nextElementSibling;
    if (currentList != list) list.classList.remove("show");
  });
}

accordions.forEach(acc => acc.addEventListener("click", activate));
