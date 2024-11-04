import { employeesFiltered } from "./filter.js";
let index = 0;
let employee;

const overlay = document.querySelector(".overlay");
const employeesContainer = document.querySelector(".employeesContainer");

function updateModal(element){

    const modalCard = document.querySelector(".modalCard");
    const img = modalCard.querySelector("img")
    const content = modalCard.querySelector(".contentCard");
    const name = content.querySelector("#nameModal");
    const email = content.querySelector("#emailModal");
    const city = content.querySelector("#cityModal");
    const number = content.querySelector("#numberModal");
    const address = content.querySelector("#addressModal");
    const birthday = content.querySelector("#birthdayModal");

    img.src = element.dataset.imgLarge;
    name.textContent = element.dataset.name;
    email.textContent = element.dataset.email;
    city.textContent = element.dataset.city;
    number.textContent = element.dataset.phone;
    address.textContent = element.dataset.address;
    birthday.textContent = element.dataset.birthday;

}

function nextCard(){

    if (index !== employeesFiltered.length - 1){

        index++;
        employee = employeesFiltered[index];
        

    }else{

        index = 0;
        employee = employeesFiltered[index];

    }

    updateModal(employee);
}

function previusCard(){

    if(index !== 0){

        index--;
        employee = employeesFiltered[index];

    }else{

        index = employeesFiltered.length - 1;
        employee = employeesFiltered[index];

    }

    updateModal(employee);

}

window.nextCard = nextCard;
window.previusCard = previusCard;

employeesContainer.addEventListener("click", event => {

    const card = event.target.closest(".employee");

    if(!card) return;

    index = Array.from(employeesFiltered).indexOf(card);

    overlay.classList.remove("close");
    overlay.classList.add("open");

    const modalCard = document.createElement("div");
    modalCard.className = "modalCard";

    const divClose = document.createElement("div");
    const spanClose = document.createElement("span")
    spanClose.className = "material-symbols-outlined"
    spanClose.textContent = "close";
    divClose.appendChild(spanClose);

    const imgCard = document.createElement("div");
    imgCard.className = "imgCard";
    const img = document.createElement("img");
    img.src = card.dataset.imgLarge;
    imgCard.appendChild(img);

    const contentCard = document.createElement("div");
    contentCard.className = "contentCard";

    const name = document.createElement("h3");
    name.textContent = card.dataset.name;
    name.id = "nameModal";

    const email = document.createElement("p");
    email.textContent = card.dataset.email;
    email.id = "emailModal";

    const city = document.createElement("p");
    city.textContent = card.dataset.city;
    city.id = "cityModal";

    const line = document.createElement("hr");

    const number = document.createElement("p");
    number.textContent = card.dataset.phone;
    number.id = "numberModal";

    const address = document.createElement("p");
    address.textContent = card.dataset.address;
    address.id = "addressModal";

    const birthday = document.createElement("p");
    birthday.textContent = "Birthday: " + card.dataset.birthday;
    birthday.id = "birthdayModal";

    [name, email, city, line, number, address, birthday].forEach(element => contentCard.appendChild(element));
    
    modalCard.appendChild(divClose);
    modalCard.appendChild(imgCard);
    modalCard.appendChild(contentCard);

    overlay.appendChild(modalCard);
});

overlay.addEventListener("click", event => {

    if(event.target.tagName === "SPAN"){
        overlay.classList.remove("open")
        overlay.classList.add("close")

        event.target.closest(".modalCard").remove();
    }

});