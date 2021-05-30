import { client }                 from "../rest/restClient.js";

const write = (message) => {
    const out = document.getElementById('out');
    out.innerText = message;
}

const demonstrateRestCall = () => {

    const deathStarUrl = "https://swapi.dev/api/starships/9/";
    client(deathStarUrl)
        .then(starship => {
            write(starship.name);
        })
        .catch( err => console.error(err));
}

demonstrateRestCall();
