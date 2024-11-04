import { employees } from "./filter";

const overlay = document.querySelector(".overlay");
const employeesContainer = document.querySelector(".employeesContainer");

employeesContainer.addEventListener("click", event => {

    const card = event.target.closest(".employee");

    if(!card) return;

    const index = Array.from(employees).indexOf(card);

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

    const email = document.createElement("p");
    email.textContent = card.dataset.email;

    const city = document.createElement("p");
    city.textContent = card.dataset.city;

    const line = document.createElement("hr");

    const number = document.createElement("p");
    number.textContent = card.dataset.phone;

    const address = document.createElement("p");
    address.textContent = card.dataset.address;

    const birthday = document.createElement("p");

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