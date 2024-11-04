const input = document.querySelector("#filter");
export let employees = [];
export let employeesFiltered = [];
const dropDownList = document.querySelector("#dropdown");

let arrayDimension;
let employeeCard;
let card;
let widthCard;
let counterStyle = 0;

export function addElementForFilter(){

    employees = document.querySelectorAll(".employee");
    employeesFiltered = Array.from(employees).map(employee => employee);
    employeeCard = document.querySelector(".employee");
    card = window.getComputedStyle(employeeCard);
    widthCard = card.getPropertyValue('width');
    arrayDimension = employees.length;
    
}

function adjustGridOneElement(){

    document.querySelector('.employeesContainer').style.gridTemplateColumns = `repeat(auto-fit, minmax(200px, ${widthCard}))`;

}

function filterEmployeesArray(){
    employeesFiltered = Array.from(employees).filter(employee =>  employee.style.display === "flex" );
}

function displayName(value){

    input.value = value;
    dropDownList.innerHTML = "";
    dropDownList.style.display = "none";

    employees.forEach(employee => {
        if(!employee.dataset.name.toLowerCase().includes(input.value.toLowerCase())){
            employee.style.display = "none";
        }

    })

    adjustGridOneElement();
    filterEmployeesArray();
}

window.displayName = displayName;

input.addEventListener("keyup", (event) => {

    const enterKey = event.key === "Enter";
    const notEnterKey = event.key !== "Enter";
    const notEmptyInput = input.value !== "";

    if( enterKey && notEmptyInput){
        input.value = dropDownList.firstChild.textContent;
        dropDownList.style.display = "none";
    }

    dropDownList.innerHTML = "";

    employees.forEach(element => {

        const nameMatches = element.dataset.name.toLowerCase().includes(input.value.toLowerCase());
        const nameNotMatches = !element.dataset.name.toLowerCase().includes(input.value.toLowerCase());

        if(nameMatches && notEmptyInput && notEnterKey){

            const li = document.createElement("li");
            li.textContent = element.dataset.name;
            li.setAttribute("onclick", "displayName('" + element.dataset.name + "')");
            dropDownList.appendChild(li);
            dropDownList.style.display = "block";

            element.style.display = "flex";

            counterStyle += 0;

        }else if(input.value === ""){

            dropDownList.style.display = "none";

        }else if(nameNotMatches && notEmptyInput){

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

        adjustGridOneElement();
        counterStyle = 0;

    }else{

        document.querySelector('.employeesContainer').style.gridTemplateColumns = `repeat(auto-fit, minmax(285px, 1fr))`;
        counterStyle = 0;
    }

    filterEmployeesArray();

})