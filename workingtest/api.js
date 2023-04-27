async function getJoke() {
    let joke; 
    let icon; 
    const data = await fetch("https://api.chucknorris.io/jokes/random"); 
    const json = await data.json(); 
    joke = json.value; 
    icon = json.icon_url; 
 
    if (joke) {
        document.getElementById("joke").innerText = joke;
    }
 
    if (icon) {
        document.getElementById("icon").src = icon;
    }
}
 
getJoke();