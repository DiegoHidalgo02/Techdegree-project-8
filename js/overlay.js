const overlay = document.querySelector(".overlay");
const employeesContainer = document.querySelector(".employeesContainer");

employeesContainer.addEventListener("click", event => {

    const card = event.target.closest(".employee");

    if(!card) return;

    overlay.classList.remove("close");
    overlay.classList.add("open");

});

overlay.addEventListener("click", event => {

    if(event.target.tagName === "SPAN"){
        overlay.classList.remove("open")
        overlay.classList.add("close")
    }

});