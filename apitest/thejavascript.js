async function getanime(){
    const data = await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1");
    const json = await data.json();
    v1_get_facts = json.v1_get_facts;
    anime_img = json.anime_img; 
 
    if (v1_get_facts) {
        document.getElementById("anime_name").innerText = v1_get_facts;
    }


 
    if (anime_img) {
        document.getElementById("anime_img").src = anime_img;
    }
}
 
getanime();