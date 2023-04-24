const client = require(`catboys`);
const catboy = new client();

async function test() {
    const data = await fetch("https://api.chucknorris.io/jokes/random"); 
    const json = await data.json(); 
    console.log(await catboy.img());
}

test();