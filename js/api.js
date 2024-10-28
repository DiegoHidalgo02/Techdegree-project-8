async function fetchUser(url){

    const user = await fetch(url);

    const userJSON = await user.json();

    console.log(userJSON);

    return userJSON;

}


function generateUserHtml(json){

    const employee = document.createElement("div");
    employee.className = "employee";

    const userImg = document.createElement("div");
    userImg.className = "userImg";

    const img = document.createElement("img");
    img.src = json.results[0].picture.medium;
    employee.dataset.img = json.results[0].picture.thumbnail;

    userImg.appendChild(img);

    const content = document.createElement("div");
    content.className = "contentEmployeeCard";

    const name = document.createElement("h3");
    name.textContent = json.results[0].name.first + " " +json.results[0].name.last ;
    employee.dataset.name = json.results[0].name.first + " " + json.results[0].name.last;

    const email = document.createElement("p");
    email.textContent = json.results[0].email;
    employee.dataset.email = json.results[0].email;

    const city = document.createElement("p")
    city.textContent = json.results[0].location.city;
    employee.dataset.city = json.results[0].location.city;

    employee.appendChild(userImg);

    [name, email, city].forEach(element => content.appendChild(element));

    employee.appendChild(content);

    employeesContainer.appendChild(employee);

}

fetchUser('https://randomuser.me/api/')
    .then(generateUserHtml);