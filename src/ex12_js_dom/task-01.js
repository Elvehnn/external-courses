let slideIndex = 1;
const petsList = [
    { 
        "img": "assets/pets-katrine.png",
        "name": "Katrine", 
    },
    { 
        "img": "assets/pets-jennifer.png", 
        "name": "Jennifer",
    },
    { 
        "img": "assets/pets-woody.png", 
        "name": "Woody",
    },
    { 
        "img": "assets/pets-sophia.png", 
        "name": "Sophia",
    },
    { 
        "img": "assets/pets-timmy.png", 
        "name": "Timmy",
    },
    { 
        "img": "assets/Squirrel.jpg", 
        "name": "Squirrel",
    },
];

document.querySelector(".arrow__left").addEventListener("click", () => {
      if (slideIndex > 1) {
        slideIndex -= 1;
        changeSlides(petsList[slideIndex - 1]);
      } else {
        slideIndex = petsList.length;
        changeSlides(petsList[slideIndex - 1]);
      }
    });

document.querySelector(".arrow__right").addEventListener("click", () => {
      if (slideIndex < petsList.length) {
        slideIndex += 1;
        changeSlides(petsList[slideIndex - 1]);
      } else {
        slideIndex = 1;
        changeSlides(petsList[slideIndex - 1]);
      }
    });

let image = document.querySelector(".pet__picture");
changeSlides = (pet) => {
    image.src = pet.img;
    image.alt = pet.name;
}
