// get elements
const btn = document.querySelector("button");

// functions

async function getData() {
  try {
    btn.textContent = "loading...";
    btn.disabled = true;
    const response = await fetch("https://api.catboys.com/img");
    const data = await response.json();
    document.querySelector(".anime").classList.remove("hidden");
    btn.disabled = false;
    const imgUrl = data.url;
    const imgArtist = data.artist;
    const image = document.querySelector("img");
    image.src = imgUrl;
    image.alt = imgArtist;
    document.querySelector("p").textContent = imgArtist;
    btn.textContent = "Get Anime";
  } catch (err) {
    console.error(err);
    document.querySelector("p").textContent = "An error ocurred, please retry";
    btn.disabled = false;
    btn.textContent = "Get Anime";
  }
}

// eventListeners

btn.addEventListener("click", getData);
