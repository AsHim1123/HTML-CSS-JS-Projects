const btnEL = document.getElementById("btn");

const jokeEL = document.getElementById("joke");
const APIkey = "2hdLkoGOej7sltpA+IzmOQ==Epwv1gQAkJR1ShoB";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": APIkey,
  },
};

const ApiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

getJoke = async () => {
  jokeEL.innerText = "Updating...";

  const response = await fetch(ApiURL, options);
  const data = await response.json();

  jokeEL.innerText = data[0].joke;
};
btnEL.addEventListener("click", getJoke);
