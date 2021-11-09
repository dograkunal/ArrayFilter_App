"use strict";

window.addEventListener("load", () => {
  document.getElementById("search").addEventListener("keyup", handleUsersInput);
});
let helperList = [];
let mainList = [];

const album = (stuff) => {
  const card = document.createElement("article");

  const userid = document.createElement("div");
  const bullet = document.createElement("div");
  const title = document.createElement("div");

  card.classList.add("card");

  userid.innerText = stuff.userId;
  bullet.innerText = stuff.id;
  title.innerText = stuff.title;

  card.appendChild(userid);
  card.appendChild(bullet);
  card.appendChild(title);

  document.getElementById("container").appendChild(card);
};

function handleUsersInput(e) {
  const { value } = e.target;
  mainList = helperList.filter((el) => el.title.includes(value));
  console.log(mainList, "main list after inout");
  if (mainList.length > 0) {
    document.getElementById("container").remove();
    const container = document.createElement("article");
    container.id = "container";
    container.classList.add("container");
    document.body.appendChild(container);
  }
  mainList.forEach((el) => {
    album(el);
  });
}

function resetList() {
  mainList = helperList;
  mainList.forEach((item) => {
    album(item);
  });
}

// const str1 = (material) => {
//   console.log(str1);
// };

function fetchAlbum() {
  return fetch("https://jsonplaceholder.typicode.com/albums").then((data) =>
    data.json()
  );
}
fetchAlbum().then((data) => {
  data.forEach((element) => {
    album(element);
    // album(material);
    // console.log(data);
  });
  helperList = data;
  mainList = data;
});

// const str2 = str1.includes("str2");
