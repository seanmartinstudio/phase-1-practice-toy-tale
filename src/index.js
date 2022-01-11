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
rendertoyObjects()
}
init()

//Render toy objects to DOM
function rendertoyObjects(toys) {
const toyCard = document.createElement('div')
toyCard.id = `toy-${toys.id}`
console.log(toyCard)
}


//Fetch toy objects from server
function getToyObjects() {
fetch(toyObjectURL)
.then(res => res.json())
.then(toys => {
  toys.forEach(rendertoyObjects)
})
}


//To Do: Continue building out toy div cards in renderToyObjects function,
//next step is to deal with bug at line 31 and then create the class for each card.