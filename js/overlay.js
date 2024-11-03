import { employees, iterator, resetIterator} from './filter.js';

const overlay = document.querySelector(".overlay");
export const employeesContainer = document.querySelector(".employeesContainer");
let actualyIterator;
let data;

function setIterator(index){
    resetIterator();

    if(index === 0){
        data = iterator.next();
    }else{

        for (let i = -1; i < index; i++){
            data = iterator.next();
        } 

    }   
}

employeesContainer.addEventListener("click", event => {

    const card = event.target.closest(".employee");

    if(!card) return;

    actualyIterator = Array.from(employees).indexOf(card);
    setIterator(actualyIterator);

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
    name.id = "nameModal"
    name.textContent = card.dataset.name;

    const email = document.createElement("p");
    email.id = "emailModal"
    email.textContent = card.dataset.email;

    const city = document.createElement("p");
    city.textContent = card.dataset.city;
    city.id = "cityModal";

    const line = document.createElement("hr");

    const number = document.createElement("p");
    number.id = "numberModal";
    number.textContent = card.dataset.phone;

    const address = document.createElement("p");
    address.id = "addressModal";
    address.textContent = card.dataset.address;

    const birthday = document.createElement("p");
    birthday.id = "birthday";
    birthday.textContent = card.dataset.birthday;


    [name, email, city, line, number, address, birthday].forEach(element => contentCard.appendChild(element));
    
    modalCard.appendChild(divClose);
    modalCard.appendChild(imgCard);
    modalCard.appendChild(contentCard);

    overlay.appendChild(modalCard);
});

function changeModal(element){

    const modalCard = document.querySelector(".modalCard");
    const img = modalCard.querySelector("img")
    const content = modalCard.querySelector(".contentCard");
    const name = content.querySelector("#nameModal");
    const email = content.querySelector("#emailModal");
    const city = content.querySelector("#cityModal");
    const number = content.querySelector("#numberModal");
    const address = content.querySelector("#addressModal");
    const birthday = content.querySelector("#birthday");

    img.src = element.value[1].dataset.imgLarge;
    name.textContent = element.value[1].dataset.name;
    email.textContent = element.value[1].dataset.email;
    city.textContent = element.value[1].dataset.city;
    number.textContent = element.value[1].dataset.phone;
    address.textContent = element.value[1].dataset.address;
    birthday.textContent = element.value[1].dataset.birthday;

}


function nextCard(){

    if(data.value[0] === employees.length - 1){
        resetIterator();
        data.value[0] = 0;
    }

    if(data.value[0] !== 11){
       data = iterator.next();
       changeModal(data);
    }

}

window.nextCard = nextCard;

function previusCard(){


}

window.previusCard = previusCard;

overlay.addEventListener("click", event => {

    if(event.target.tagName === "SPAN"){
        overlay.classList.remove("open")
        overlay.classList.add("close")

        event.target.closest(".modalCard").remove();
    }

});

