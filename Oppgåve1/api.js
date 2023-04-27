async function getCatBoy() {
    let url; 
    const data = await fetch("https://api.catboys.com/img"); 
    const json = await data.json(); 
    url = json.url; 
 
    if (url) {
        document.getElementById("url").src = url;
    }
 
}
 
getCatBoy();