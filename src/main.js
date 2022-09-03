// Create variables targetting the relevant DOM elements here 👇

var htmlCoverImage = document.querySelector(".cover-image")
var htmlTitle = document.querySelector(".cover-title")
var htmlTagline1 = document.querySelector(".tagline-1")
var htmlTagline2 = document.querySelector(".tagline-2")

var randomCoverButton = document.querySelector(".random-cover-button")


var currentCover
var randomCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
currentCover = randomCover

htmlCoverImage.src = randomCover.cover
htmlTitle.innerText = randomCover.title
htmlTagline1.innerText = randomCover.tagline1
htmlTagline2.innerText = randomCover.tagline2


// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


// Add your event listeners here 👇

randomCoverButton.addEventListener("click", createRandomCover)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createRandomCover() {
  var randomCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  currentCover = randomCover
  htmlCoverImage.src = randomCover.cover
  htmlTitle.innerText = randomCover.title
  htmlTagline1.innerText = randomCover.tagline1
  htmlTagline2.innerText = randomCover.tagline2
}


function saveCover() {
  savedCovers.push(currentCover)
}
