async function getinfo() {
    let url; 
    const data = await fetch("https://randomuser.me/api/"); 
    const json = await data.json(); 
    firstname = [[json.results[0].name.first][json.results[0].name.last]];
    Adresse = json.results[0].location.street.name;
    Adressenr = json.results[0].location.street.number;
    Postnr = json.results[0].location.postcode;
    Poststed = json.results[0].location.city;
    Sted = json.results[0].location.country;
    Tlf = json.results[0].phone;
    Epost = json.results[0].email;
    image = json.results[0].picture.large;


    if (firstname) {
        document.getElementById("firstname").innerText = firstname;
    }

    if (Adresse) {
        document.getElementById("Adresse").innerText = Adresse;
    }
    if (Adressenr) {
        document.getElementById("Adressenr").innerText = Adressenr;
    }
    if (Postnr) {
        document.getElementById("Postnr").innerText = Postnr;
    }
 
    if (Poststed) {
        document.getElementById("Poststed").innerText = Poststed;
    }

    if (Sted) {
        document.getElementById("Sted").innerText = Sted;
    }

    if (Tlf) {
        document.getElementById("Tlf").innerText = Tlf;
    }

    if (Epost) {
        document.getElementById("Epost").innerText = Epost;
    }

    if (image) {
        document.getElementById("image").src = image;
    }
}
 
getinfo();