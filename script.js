var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

var backgroundImg = new Array(
  "assets/bg1.png",
  "assets/bg2.png",
  "assets/bg3.png",
  "assets/bg4.png",
  "assets/bg5.png"
);
let i = 0;
next.onclick = function () {
  if (i < backgroundImg.length - 1) {
    hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
    thumbnail[i + 1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i++;
  }
};

prev.onclick = function () {
  if (i > 0) {
    hero.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
    thumbnail[i - 1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i--;
  }
};
