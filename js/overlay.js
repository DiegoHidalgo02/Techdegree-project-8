const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", event => {

    if(event.target.tagName === "SPAN"){
        overlay.classList.remove("open")
        overlay.classList.add("close")
    }

});