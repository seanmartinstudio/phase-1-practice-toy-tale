let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


//Global variable for toy object URL
const toyObjectURL = 'http://localhost:3000/toys'

//Initialize Function to envoke all other functions
function init() {
getToyObjects()
// rendertoyObjects()
}
init()

//RENDER TOY OBJECT TO DOM//
function rendertoyObjects(toys) {

//Create 'div' tag with toy card container
let toyCard = document.createElement('div')
toyCard.className = 'card'
const toyCollection = document.getElementById('toy-collection')
toyCollection.appendChild(toyCard)

//Create 'h1' tag
let toyH2 = document.createElement('h2')
toyH2.textContent = `${toys.name}`
toyCard.appendChild(toyH2)

//Create 'img' tag
let toyImg = document.createElement('img')
toyImg.src = `${toys.image}`
toyImg.className = 'toy-avatar'
toyCard.appendChild(toyImg)

//Creatie 'p' tag
let toyP = document.createElement('p')
toyP.textContent = `${toys.likes} Likes`
toyCard.appendChild(toyP)

//Create 'button' tag
let toyButton = document.createElement('button')
toyButton.className = 'like-btn'
toyButton.id = `toy-${toys.id}`
toyButton.innerText = 'Like ❤️'
toyCard.appendChild(toyButton)
}


//Fetch toy objects from server
function getToyObjects() {
fetch(toyObjectURL)
.then(res => res.json())
.then(toys => {
  toys.forEach(rendertoyObjects)
})
}


//To Do: start building out event listeners and form, etc.