const searchButton = document.getElementById("search_button");
const searchField = document.getElementById("search_text");
const imageField = document.getElementById("image");
const repsField = document.getElementById("reps");
const roundsField = document.getElementById("rounds");
let reps = 12;
let rounds = 4;

searchButton.addEventListener("click", async () => {
  const searchTerm = searchField.value;

  console.log(searchTerm);

  if (searchTerm) {
    const imagesData = await getImages(searchTerm);
    updateUi(imagesData);
  }
});

const updateUi = (data) => {
  imageField.innerHTML = "";
  if (data.length === 0) {
    const noElement = document.createElement("p");
    noElement.textContent = "No images found";
    imageField.appendChild(noElement);
  } else {
    const exerciseNumber = Math.floor(Math.random() * data.length);

    const exerciseImage = data[exerciseNumber];

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", exerciseImage.source_url);
    imgElement.setAttribute("alt", exerciseImage.title.rendered);
    imageField.appendChild(imgElement);
    randomWorkout();
    repsField.innerHTML = reps + " repetitions";
    roundsField.innerHTML = rounds + " rounds";
  }
};

const getImages = async (searchTerm) => {
  try {
    const response = await fetch(
      "https://strongandhappy.se/wp-json/wp/v2/media?search=" + searchTerm
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      console.log("it worked");
      console.log(response);
    }
    const imagesData = await response.json();
    return imagesData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const randomWorkout = () => {
  reps = Math.floor(Math.random() * 15) + 1;
  rounds = Math.floor(Math.random() * 4) + 1;
};
