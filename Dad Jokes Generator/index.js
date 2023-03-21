const btnEl = document.getElementById("btn");

const jokeEl = document.getElementById("joke");

const apiKey = "0LcX3OdmAHg4Gmd3bLqu2g==Qu2PwnsE4e07Pek3";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    try {
        jokeEl.innerText = "Updating..."
        btnEl.disabled = true;
        btnEl.innerText = "LOADING..."
        const response = await fetch(apiURL, options)
        const data = await response.json()
    
        jokeEl.innerText = data[0].joke
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE"
    } catch (error) {
        jokeEl.innerText = "An error happend, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE"
    }

   
}

btnEl.addEventListener("click", getJoke)