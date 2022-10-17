let url;

document.getElementById("fetch").addEventListener("click", () => {
  url = "https://dog.ceo/api/breeds/image/random";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      alert(`connection status: ${data.status}`);
    })
    .catch((error) => {
      console.log(error);
    });
});

document.getElementById("generate").addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let ul = document.getElementById("dog-img-list");
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = data.message;
      li.appendChild(img);
      ul.appendChild(li);
    })
    .catch((error) => {
      console.log(error);
    });
});
