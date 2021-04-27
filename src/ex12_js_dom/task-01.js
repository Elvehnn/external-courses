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
        showSlides(petsList[slideIndex - 1]);
      } else {
        slideIndex = petsList.length;
        showSlides(petsList[slideIndex - 1]);
      }
    });

document.querySelector(".arrow__right").addEventListener("click", () => {
      if (slideIndex < petsList.length) {
        slideIndex += 1;
        showSlides(petsList[slideIndex - 1]);
      } else {
        slideIndex = 1;
        showSlides(petsList[slideIndex - 1]);
      }
    });

showSlides = (pet) => {
    let div = document.querySelector(".pet__card");
    div.innerHTML = '';
    div.innerHTML = `<img class="pet__picture" src="${pet.img}" alt="${pet.name}"/>`;  
}