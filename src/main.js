
var htmlCoverImage = document.querySelector(".cover-image");
var htmlTitle = document.querySelector(".cover-title");
var htmlTagline1 = document.querySelector(".tagline-1");
var htmlTagline2 = document.querySelector(".tagline-2");

var randomCoverButton = document.querySelector(".random-cover-button");
var makeCoverButton = document.querySelector(".make-new-button");
var homeButton = document.querySelector(".home-button.hidden");
var saveButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeMyBookButton = document.querySelector(".create-new-book-button");
makeMyBookButton.type = "button";

var formPageElement = document.querySelector(".view.form-view.hidden");
var homePageElement = document.querySelector(".view.home-view");
var savedPageElement = document.querySelector(".view.saved-view.hidden");

var coverInput = document.querySelector(".user-cover");
var titleInput = document.querySelector(".user-title");
var firstDescriptorInput = document.querySelector(".user-desc1");
var secondDescriptorInput = document.querySelector(".user-desc2");

var savedCoversSection = document.querySelector(".saved-covers-section");

var currentCover;

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


window.addEventListener("load", createRandomCover);
window.addEventListener("load", createCoverHTML);
randomCoverButton.addEventListener("click", createRandomCover);
makeCoverButton.addEventListener("click", loadForm);
viewSavedButton.addEventListener("click", loadSavedCovers);
homeButton.addEventListener("click", loadHomePage);
makeMyBookButton.addEventListener("click", makeMyBookForm);
saveButton.addEventListener("click", saveCurrentCover);
savedCoversSection.addEventListener("dblclick", deleteSavedCover);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);

  htmlCoverImage.src = currentCover.cover;
  htmlTitle.innerText = currentCover.title;
  htmlTagline1.innerText = currentCover.tagline1;
  htmlTagline2.innerText = currentCover.tagline2;
}

function loadForm() {
  formPageElement.classList.remove("hidden");
  homePageElement.classList.add("hidden");
  savedPageElement.classList.add("hidden");
  homeButton.classList.remove("hidden");
  randomCoverButton.classList.add("hidden");
  saveButton.classList.add("hidden");
}

function loadSavedCovers() {
  savedPageElement.classList.remove("hidden");
  homePageElement.classList.add("hidden");
  formPageElement.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
}

function loadHomePage() {
  savedPageElement.classList.add("hidden");
  homePageElement.classList.remove("hidden");
  formPageElement.classList.add("hidden");
  randomCoverButton.classList.remove("hidden");
  saveButton.classList.remove("hidden");
  homeButton.classList.add("hidden");
}

function makeMyBookForm() {
  currentCover = new Cover(coverInput.value, titleInput.value, firstDescriptorInput.value, secondDescriptorInput.value);

  loadHomePage();

  htmlCoverImage.src = currentCover.cover;
  htmlTitle.innerText = currentCover.title;
  htmlTagline1.innerText = currentCover.tagline1;
  htmlTagline2.innerText = currentCover.tagline2;

  if (!covers.includes(currentCover.cover)) {
    covers.push(currentCover.cover);
  }
  if (!titles.includes(currentCover.title)) {
    titles.push(currentCover.title);
  }
  if (!descriptors.includes(currentCover.tagline1)) {
    descriptors.push(currentCover.tagline1);
  }
  if (!descriptors.includes(currentCover.tagline2)) {
    descriptors.push(currentCover.tagline2);
  }
}

function createCoverHTML() {
  var savedSubSection = document.createElement("section"); //refactor helper function
  var savedImage = document.createElement("img");
  var savedTitle = document.createElement("h2");
  var savedTagline = document.createElement("h3");
  var savedPriceTag = document.createElement("img");
  var savedOverlay = document.createElement("img");

  savedSubSection.classList.add("mini-cover");
  savedSubSection.id = savedCovers[savedCovers.length-1].id;

  savedImage.classList.add("mini-cover");
  savedImage.src = savedCovers[savedCovers.length-1].cover;

  savedTitle.classList.add("cover-title");
  savedTitle.innerText = savedCovers[savedCovers.length-1].title;

  savedTagline.classList.add("tagline");
  var spanClass1 = document.createElement("span");
  spanClass1.classList.add("tagline-1");
  spanClass1.innerText = savedCovers[savedCovers.length-1].tagline1;

  var spanClass2 = document.createElement("span");
  spanClass2.classList.add("tagline-2");
  spanClass2.innerText = savedCovers[savedCovers.length-1].tagline2;

  var taglineText1 = document.createTextNode("A tale of ");
  var taglineText2 = document.createTextNode(" and ");
  savedTagline.appendChild(taglineText1);
  savedTagline.appendChild(spanClass1);
  savedTagline.appendChild(taglineText2);
  savedTagline.appendChild(spanClass2);

  savedPriceTag.classList.add("price-tag");
  savedPriceTag.src = "./assets/price.png";

  savedOverlay.classList.add("overlay");
  savedOverlay.src = "./assets/overlay.png";

  savedSubSection.appendChild(savedImage);
  savedSubSection.appendChild(savedTitle);
  savedSubSection.appendChild(savedTagline);
  savedSubSection.appendChild(savedPriceTag);
  savedSubSection.appendChild(savedOverlay);

  savedCoversSection.appendChild(savedSubSection);
}

function saveCurrentCover() {
  var currentCoverValues = `${currentCover.cover}${currentCover.title}${currentCover.tagline1}${currentCover.tagline2}`;
  for (var i = 0; i < savedCovers.length; i++) {
    var savedCoverValues = `${savedCovers[i].cover}${savedCovers[i].title}${savedCovers[i].tagline1}${savedCovers[i].tagline2}`;
    if (currentCoverValues === savedCoverValues) {
      return;
    }
  }
  savedCovers.push(currentCover);
  createCoverHTML();
}

function deleteSavedCover(event) {
  targetSection = event.target.parentElement;
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id.toString() === targetSection.id) {
      savedCovers.splice(i, 1);
      targetSection.remove();
    }
  }
}
