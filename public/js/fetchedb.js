// fetches from exercise db api.
const getInstructions = document.querySelector(".getInstructions");
const apiURL = "https://v2.exercisedb.io/exercises/exercise/${exercise_name}";
const instructionModal = document.querySelector("#instructionModal");
const modalGif = document.querySelector("#exercise-gif");
const modalInstructions = document.querySelector("#exercise-instructions");
const closeBtn = document.querySelector("#close-modal");
const modalTitle = document.querySelector("#exercise-name");
const axios = require("axios");

getInstructions.forEach((button) => {
    button.addEventListener("click", async (event) => {
        const exercise_name = event.target.getAttribute("data-value");
        try {
            const data = response.data;
            const instructions = data.instructions;
            const gifUrl = data.gifUrl;
            const options = {
                method: "GET",
                url: apiURL,
                params: { limit: "1", offset: "0" },
                headers: { accept: "application/json",
                    'x-rapidapi-key': process.env.DB_API_KEY,
                    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                 },
              };
            const response = await axios.request(options);
            modalGif.setAttribute("src", gifUrl);
            modalTitle.textContent = exercise_name;
            modalInstructions.textContent = instructions;

            instructionModal.classList.remove("hidden");
        } catch (error) {
            console.error("There was an error fetching the exercise data:", error);
            // Handle the error appropriately
        }
    });
});

closeBtn.addEventListener("click", () => {
    instructionModal.classList.add("hidden");
});