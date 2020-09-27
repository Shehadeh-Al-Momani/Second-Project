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

const list = $(".playList");
const title = $("#mainTitle");
  
for ( i=1 ; i < videos.length ; i++ ) {
if (i ===1) { 
     div_i = $(`<div id = "firstVideo" class="playListVideos"></div>`); 
}
else  {
  div_i = $(`<div class="playListVideos"></div>`);
}  
const div_i_1 = $(`<div onclick="play(${i})"> <img class="vedioInPlayList" src="${videos[i].thumbnail}" > </div>`);
const div_i_2 = $(`<div class="titleInPlayList"> ${videos[i].title} </div>`); 
list.append(div_i ) ;
div_i.append(div_i_1 , div_i_2 );
} ;  

function play(list) {
  for (i = 1; i < videos.length; i++) {
    if (i === list) {
      $("#mainVideo").attr(
        "src",
        `https://www.youtube.com/embed/${videos[i].id}`
      );
      title.text(`${videos[i].title}`);
    }
  }
}
  