const input = document.querySelector("#filter");
let employees = [];
const dropDownList = document.querySelector("#dropdown");

let arrayDimension;
let employeeCard;
let card;
let widthCard;
let counterStyle = 0;
export function addElementForFilter(){

    employees = document.querySelectorAll(".employee");
    console.log(employees);

    employeeCard = document.querySelector(".employee");
    card = window.getComputedStyle(employeeCard);
    widthCard = card.getPropertyValue('width');
    arrayDimension = employees.length;
    
}

input.addEventListener("keyup", (event) => {

    if(event.key === "Enter" && input.value !== ""){
        input.value = dropDownList.firstChild.textContent;
        dropDownList.style.display = "none";
    }

    dropDownList.innerHTML = "";

    employees.forEach(element => {

        if(element.dataset.name.toLowerCase().includes(input.value.toLowerCase()) && input.value != "" && event.key !== "Enter"){

            const li = document.createElement("li");
            li.textContent = element.dataset.name;
            dropDownList.appendChild(li);
            dropDownList.style.display = "block";
            element.style.display = "flex";

            counterStyle += 0;

        }else if(input.value === ""){

            dropDownList.style.display = "none";

        }else if(!element.dataset.name.toLowerCase().includes(input.value.toLowerCase()) && input.value != ""){

            element.style.display = "none";

            counterStyle++;
        
        }

    })


    if(input.value === ""){

        employees.forEach(element => {
            element.style.display = "flex"
        })  

    }

    if (arrayDimension  > counterStyle && arrayDimension - counterStyle === 1 ||  arrayDimension - counterStyle === 2 ){

        document.querySelector('.employeesContainer').style.gridTemplateColumns = `repeat(auto-fit, minmax(200px, ${widthCard}))`;
        counterStyle = 0;

    }else{

        document.querySelector('.employeesContainer').style.gridTemplateColumns = `repeat(auto-fit, minmax(285px, 1fr))`;
        counterStyle = 0;
    }

})