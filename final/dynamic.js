const videos = [
  {
    id: "7yLxxyzGiko",
    title: "Kittens walk with a tiny chicken",
    thumbnail: "https://img.youtube.com/vi/7yLxxyzGiko/maxresdefault.jpg",
  },
  {
    id: "rS6cvjFXg9s",
    title: "Cute kitten named Garfield washes its paws and prepares to sleep.",
    thumbnail: "https://img.youtube.com/vi/rS6cvjFXg9s/maxresdefault.jpg",
  },
  {
    id: "BFNekjEgvuk",
    title: "Kitten sleeps sweetly with the Chicken 🐥",
    thumbnail: "https://img.youtube.com/vi/BFNekjEgvuk/maxresdefault.jpg",
  },
  {
    id: "te1fHMaw4UY",
    title: "White kitten and white tiny bunnies 🐰 | It's so Сute! 🥰",
    thumbnail: "https://img.youtube.com/vi/te1fHMaw4UY/maxresdefault.jpg",
  },
  {
    id: "MFyUZqSknvw",
    title: "Kittens meets and walk with a cute white bunny",
    thumbnail: "https://img.youtube.com/vi/MFyUZqSknvw/maxresdefault.jpg",
  },
  {
    id: "hlajmIPiphk",
    title: "Mom Cat playing and talking to her Cute Meowing baby Kittens",
    thumbnail: "https://img.youtube.com/vi/hlajmIPiphk/maxresdefault.jpg",
  },
  {
    id: "Cz47GimSxIc",
    title: "Funny Kitten wags its tail like a Puppy",
    thumbnail: "https://img.youtube.com/vi/Cz47GimSxIc/maxresdefault.jpg",
  },
  {
    id: "RmpuhbdnAfQ",
    title: "Kitty Coco and her Sleepy younger brother 🥰",
    thumbnail: "https://img.youtube.com/vi/RmpuhbdnAfQ/maxresdefault.jpg",
  },
];

function play(list) {
  videoShow = document.getElementById("mainVideo");
  titleShow = document.getElementById("mainTitle");
  if (list === 1) {
    videoShow.src = "https://www.youtube.com/embed/rS6cvjFXg9s";
    titleShow.innerText =
      "Cute kitten named Garfield washes its paws and prepares to sleep.";
    titleShow.innerText.font = "1.25em";
   }
  if (list === 2) {
    videoShow.src = "https://www.youtube.com/embed/BFNekjEgvuk";
    titleShow.innerText =
      "Kitten sleeps sweetly with the Chicken 🐥";
    titleShow.innerText.font = "1.25em";
  }
  if (list === 3) {
    videoShow.src = "https://www.youtube.com/embed/te1fHMaw4UY";
    titleShow.innerText =
      "White kitten and white tiny bunnies 🐰 | It's so Сute! 🥰";
    titleShow.innerText.font = "1.25em";
  }
  if (list === 4) {
    videoShow.src = "https://www.youtube.com/embed/MFyUZqSknvw";
    titleShow.innerText =
      "Kittens meets and walk with a cute white bunny";
    titleShow.innerText.font = "1.25em";
  }
  if (list === 5) {
    videoShow.src = "https://www.youtube.com/embed/hlajmIPiphk";
    titleShow.innerText =
      "Mom Cat playing and talking to her Cute Meowing baby Kittens";
    titleShow.innerText.font = "1.25em";
  }
  if (list === 6) {
    videoShow.src = "https://www.youtube.com/embed/Cz47GimSxIc";
    titleShow.innerText =
      "Funny Kitten wags its tail like a Puppy";
    titleShow.innerText.font = "1.25em";
  }
  if (list === 7) {
    videoShow.src = "https://www.youtube.com/embed/RmpuhbdnAfQ";
    titleShow.innerText =
      "White kitten and white tiny bunnies 🐰 | It's so Сute! 🥰";
    titleShow.innerText.font = "1.25em";
  }
}
