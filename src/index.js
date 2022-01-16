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
  toyFormContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const toyImg = event.target.image.value
    const toyName = event.target.name.value
    postToy(toyName, toyImg)
  })
});




//GLOBAL VARIABLES
//Store fetch in 'toyObjectURL' variable
const toyObjectURL = 'http://localhost:3000/toys'


//Initialize Function to envoke all other functions
function init() {
  getToyObjects()
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
  toyButton.textContent = 'Like ❤️'
  // toyButton.addEventListener('click', (event) => {console.log(toys)}) //come back to this for like button
  toyCard.appendChild(toyButton)
}


//FETCH TOY OBJECTS FROM SERVER
function getToyObjects() {
  fetch(toyObjectURL)
    .then(res => res.json())
    .then(toys => {
      toys.forEach(rendertoyObjects)
    })
}

//POST TOY OBJECTS TO SERVER AND ADD TO DOM
function postToy(toyName, toyImg) {

  const newToy = {
    'name': toyName,
    'image': toyImg,
    'likes': 0,
  }

  fetch(toyObjectURL, {

    method: 'POST',
    headers: {
      'Conent-Type': 'application/json',
      'Accept': 'application/json',
      
    },
    body: JSON.stringify(newToy)
  })

    .then(res => res.json())
    .then(data => console.log(data))

}

//To Do: start building out event listeners and form, etc.

