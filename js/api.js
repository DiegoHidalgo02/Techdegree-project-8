async function fetchUser(url){

    const user = await fetch(url);

    const userJSON = await user.json();

    console.log(userJSON);

    return userJSON;

}
